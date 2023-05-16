import { React, useState } from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../../../config/Firebasemethods';
import CRSelect from '../../../Components/CRSelect';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header from '../../../Components/Header';
import studentsIcon from '../../../Images/cap.png'


function AddCars(props) {

    const [model, setModel] = useState({
        img: "<img src='https://fids.com/wp-content/themes/consultix/images/no-image-found-360x250.png' width='100%' />",
        visibility: true,

    });
    const [display, setDisplay] = useState('none');
    const navigate = useNavigate();

    const status = [
        'Confirmed',
        'Reject'
    ]
    const availability=[
        "Yes",
        "No"
    ]

    let hidding = () => {
        setTimeout(() => {
            setDisplay('none');
            navigate('../Cars-list')

        }, 4000);
    }

    const addNow = () => {
        postData("cars", model).then((res) => {
            console.log(res);
            setDisplay('block');
            hidding();

        }).catch((err) => { console.log(err); });

    }

    const btnArr = [
        {
            displayName: "add Now",
            func: addNow
        }
    ]

    const ac = [
        'Yes',
        'No'
    ]
    const gps = [
        'Yes',
        'No'
    ]
    const bluetooth = [
        'Yes',
        'No'
    ]
    const usbport = [
        'Yes',
        'No'
    ]
    const type = [
        'New',
        'Used'
    ]


    return (
        <>
            <Header label="Students" logo={studentsIcon} btnArray={btnArr} />

            <Box display={display}><Typography variant='h6' color='green'>Your data has been saved..</Typography></Box>

            <Box

                className="d-flex justify-content-center align-items-center ">
                <Box sx={{ textAlign: "left", padding: "20px" }}>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, car: e.target.value })}
                            variant="outlined"
                            label="Car"
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, model: e.target.value })}
                            variant="outlined"
                            label="Model"
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, color: e.target.value })}
                            variant="outlined"
                            label="Color"
                            style={{ width: "100%" }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="AC" variant="outlined" func={(e) => setModel({ ...model, ac: e.target.value })} arr={ac} />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="GPS" variant="outlined" func={(e) => setModel({ ...model, gps: e.target.value })} arr={gps} />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="Bluetooth" variant="outlined" func={(e) => setModel({ ...model, bluetooth: e.target.value })} arr={bluetooth} />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="Usb Port" variant="outlined" func={(e) => setModel({ ...model, usbport: e.target.value })} arr={usbport} />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="Type" variant="outlined" func={(e) => setModel({ ...model, type: e.target.value })} arr={type} />
                    </Box>
                    
                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="Availability" variant="outlined" func={(e) => setModel({ ...model, availability: e.target.value })} arr={availability} />
                    </Box>
                    <Box sx={{ display: "inline-block", marginLeft: "10px" }}>
                        <TextField
                            onChange={(e) => setModel({ ...model, rent: e.target.value })}
                            variant="outlined"
                            label="Rent"
                            style={{ width: "100%" }}
                        />
                    </Box>







                    <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px", width: "238px" }} >
                        <CRSelect label="Confirmation" variant="outlined" func={(e) => setModel({ ...model, confirmation: e.target.value })} arr={status} />
                    </Box>
                    <Box sx={{display: "inline-block", marginLeft: "10px", marginTop: "20px", textAlign: "center" }}>
                        <Button variant="contained" component="label" sx={{ marginTop: "90px", m: 0, minWidth: 210 }}
                            disabled=""
                        // value={model.img ? model.img : data.img}
                        >
                            Upload File
                            <input type="file" hidden />
                        </Button>
                    </Box>
                    


                  


                    {/* <Box sx={{ display: "inline-block", marginLeft: "10px", marginTop: "20px" }}>

                        <Button variant='contained' fullWidth onClick={registeredcourse} >Confirm Booking</Button>
                    </Box> */}

                </Box>
            </Box>
        </>
    );
}

export default AddCars;
