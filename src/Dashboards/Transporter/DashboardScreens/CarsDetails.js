// import React from 'react';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import FormGroup from '@mui/material/FormGroup';
// import Switch from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';
// import { useLocation } from 'react-router-dom';
// import Header from '../../../Components/Header';
// import { Box } from '@mui/system';
import studentDetailsIcon from '../../../Images/cap.png'

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typography, TextField, Box } from '@mui/material';
import instituteListIcon from '../../../Images/book.png';
import Header from '../../../Components/Header';
import CRButton from '../../../Assets_Component/CRButton';
import CRSelect from '../../../Components/CRSelect';
import { deleteData, postData,userRegistration } from '../../../config/Firebasemethods';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser';



import { Button } from "@mui/material";



function CarsDetails(props) {


    const data = useLocation().state
    const [model, setModel] = useState({
        ...data,
    });
    const [display, setDisplay] = useState(true);
    const [displayStatus, setDisplayStatus] = useState('none');
    const navigate = useNavigate();


    let saveData = () => {
        setDisplay(true)
        console.log(model, "Updated");
        postData("cars", model, data.id).then((res) => {
            console.log(res);
            setDisplayStatus('block');
            hidding();


        }).catch((err) => {
            console.log(err);
        })
    }
    let edit = () => {
        setDisplay(false);
    }
    let deleteById = () => {
        setDisplay(true)
        deleteData("studentRegistrationFormData",model.id).then((res) => {
            setDisplayStatus('block');
            model.visibility = false
            hidding();
        }).catch((err) => {
            console.log(err);
        })
    }

    let hidding = () => {
        setTimeout(() => {
            setDisplayStatus('none');
            navigate('../Cars-list')

        }, 2000);
    }
    

    // select 
    const course = [
        'web and mobile application',
        'ccna',
        'ccnp',
    ]
    const confirmation = [
        'Confirmed',
        'Reject'
    ]
    console.log(data, "====>");
    // console.log(model.instituteName,"<====>");

    const btnArr = [
        {
            displayName: "Delete",
            func: deleteById
        },
        {
            displayName: "Edit",
            func: edit
        },
        {
            displayName: "Save",
            func: saveData
        }
    ]
    

    return (
        <>

            <Box>
                <Box>
                    <Header btnArray={btnArr} label='Cars Details' logo={studentDetailsIcon} />
                    {model.id ? <Box display={displayStatus}><Typography variant='h6' color='green'>Your data has been saved..</Typography></Box> : <Box display={displayStatus}><Typography variant='h6' color='red'>Data Deleted Successfully..</Typography></Box>}
                    <Container>
                        <Row className='textCenter mt-4' >
                            <Box sx={{ textAlign: "", fontSize: '30px', textTransform: "uppercase" }}>{data.car} {model.confirmation == "Confirmed" ? <AdjustIcon sx={{ color: 'white', backgroundColor: 'green', borderRadius: "8px", marginLeft: '5px', fontSize: 'medium' }} /> :
                                <AdjustIcon sx={{ color: 'white', backgroundColor: 'red', borderRadius: "8px", marginLeft: '5px', fontSize: 'medium' }} />}</Box>
                            <Col sm={12} md={4}>
                                <Box>
                                    <Box>
                                        {/* <img src={data.img} width="100%" /> */}
                                    {parse(data.img)}
                                    </Box>
                                    <Box sx={{ marginTop: "20px", textAlign: "center" }}>
                                        <Button variant="contained" component="label" sx={{ marginTop: "30px", m: 0, minWidth: 210 }}
                                            disabled={display}
                                        // value={model.img ? model.img : data.img}
                                        >
                                            Upload File
                                            <input type="file" hidden />
                                        </Button>
                                    </Box>
                                </Box>
                            </Col>
                            <Col sm={12} md={8} >
                                <Row>

                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, car: e.target.value })}
                                                variant="standard"
                                                label="Car name"
                                                disabled={display}
                                                value={model.car ? model.car : data.car}
                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, model: e.target.value })}
                                                variant="standard"
                                                label="Model"
                                                disabled={display}
                                                value={model.model ? model.model : data.model}
                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, color: e.target.value })}
                                                variant="standard"
                                                label="Color"
                                                disabled={display}
                                                value={model.color ? model.color : data.color}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, ac: e.target.value })}
                                                variant="standard"
                                                label="Ac"
                                                disabled={display}
                                                value={model.ac ? model.ac : data.ac}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, gps: e.target.value })}
                                                variant="standard"
                                                label="Gps"
                                                disabled={display}
                                                value={model.gps ? model.gps : data.gps}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, bluetooth: e.target.value })}
                                                variant="standard"
                                                label="Bluetooth"
                                                type={Number}
                                                disabled={display}
                                                value={model.bluetooth ? model.bluetooth : data.bluetooth}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, usbport: e.target.value })}
                                                variant="standard"
                                                label="Usb Port"
                                                type={Number}
                                                disabled={display}
                                                value={model.usbport ? model.usbport : data.usbport}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, type: e.target.value })}
                                                variant="standard"
                                                label="Type"
                                                type='text'
                                                disabled={display}
                                                value={model.type ? model.type : data.type}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <TextField
                                                onChange={(e) => setModel({ ...model, rent: e.target.value })}
                                                variant="standard"
                                                label="Rent"
                                                type='text'
                                                disabled={display}
                                                value={model.rent ? model.rent : data.rent}

                                            />
                                        </Box>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <Box sx={{ marginTop: "10px" }}>
                                            <CRSelect label="Status" variant="standard" func={(e) => setModel({ ...model, confirmation: e.target.value })} arr={confirmation}
                                                disabled={display}
                                                value={model.confirmation ? model.confirmation : data.confirmation}
                                             />
                                        </Box>
                                    </Col>
                                    
                                    <Col sm={12} md={4}>
                                        {/* <Box sx={{ marginTop: "20px" }}>
                                        <Button variant="contained" component="label" sx={{ marginTop: "30px", m: 0, minWidth: 210 }}
                                            disabled={display}
                                        // value={model.img ? model.img : data.img}
                                        >
                                            Upload File
                                            <input type="file" hidden />
                                        </Button>
                                    </Box> */}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Box>

            </Box>
            {/* {approvedBtn && Array.isArray(approvedBtn) ? <td>
                                       
                                       </td> : null}
                                   </tr>
                               ))} */}
            {/* <FormGroup>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography color='red' ><CloseIcon fontSize='small' /></Typography>
                    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                    <Typography color="green" ><CheckIcon fontSize='small' /></Typography>
                </Stack>
            </FormGroup> */}
        </>
    );
}

export default CarsDetails;