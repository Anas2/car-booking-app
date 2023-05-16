import { React, useState } from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { postData } from '../config/Firebasemethods';
import CRSelect from '../Components/CRSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function BookingFrom(props) {

    const Pagedata = useLocation().state;
    console.log(Pagedata, "PageData");
    const [model, setModel] = useState({
        car:Pagedata.car,
        img: "<img src='https://fids.com/wp-content/themes/consultix/images/no-image-found-360x250.png' width='100%' />",
        visibility: true,

    });
    const [display, setDisplay] = useState('none');
    const navigate = useNavigate();

    const confirmation = [
        'Confirmed',
        'Not confirmed'
    ]

    let registeredcourse = () => {
        console.log(model);
        postData("bookedCars", model).then((res) => {
            console.log(res);
            setDisplay('block');
            hidding();

        }).catch((err) => { console.log(err); });
    }

    let hidding = () => {
        setTimeout(() => {
            setDisplay('none');
            navigate('../success')

        }, 4000);
    }


    return (
        <>
            <Box display={display}><Typography variant='h6' color='green'>Your data has been saved..</Typography></Box>

            <Box

                className="d-flex justify-content-center align-items-center ">
                <Box sx={{ textAlign: "left", padding: "20px" }}>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, startingLocation: e.target.value })}
                            variant="outlined"
                            label="Starting Location"
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, endingLocation: e.target.value })}
                            variant="outlined"
                            label="Ending Location"
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, cost: e.target.value })}
                            variant="outlined"
                            label="Cost"
                            style={{ width: "100%" }}
                            value={Pagedata.rent}
                            disabled


                        />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker onChange={(e) => setModel({ ...model, bookingDate: e.$d })} variant="outlined" label="Date Of Booking" />
                        </LocalizationProvider>

                    </Box>

                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, startTime: e.target.value })}
                            variant="outlined"
                            label="Rent booking Starting Time"
                            style={{ width: "100%" }}


                        />
                    </Box>

                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, endTime: e.target.value })}
                            variant="outlined"
                            label="Rent booking Ending Time"
                            style={{ width: "102%" }}


                        />
                    </Box>

                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "96%" }} >
                        <CRSelect label="Confirmation" variant="outlined" func={(e) => setModel({ ...model, confirmation: e.target.value })} arr={confirmation} />
                    </Box>

                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px" }}>

                        <Button variant='contained' fullWidth onClick={registeredcourse} >Confirm Booking</Button>
                    </Box>

                </Box>
            </Box>
        </>
    );
}

export default BookingFrom;
