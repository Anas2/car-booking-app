import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typography, Box } from '@mui/material';
import studentsIcon from '../../../Images/cap.png'
import Header from '../../../Components/Header';
import { getDataFromDb } from '../../../config/Firebasemethods';
import CRGrid from '../../../Components/CRGrid';
import Loading from '../../../Components/Loading';
import { useNavigate } from 'react-router-dom';

function Students(props) {

    const [students, setStudents] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    let approvedStudent = () => {
        navigate('../add-cars');
    }
    let getData = () => {
        getDataFromDb('cars').then((res) => {
            console.log(Object.values(res));
            setStudents(Object.values(res))
            setIsLoading(false);
            // console.log(Object.values(res),"ssss");
        }).catch((err) => {
            console.log(err);
        })
    }
    const btnArr = [
        {
            displayName: "Add Car",
            func: approvedStudent
        }
    ]

    const cols = [
        {
            displayName: "img",
            key: 'img'
        },
        {
            displayName: "Car",
            key: 'car'
        },
        {
            displayName: "Model",
            key: 'model'
        },
        {
            displayName: "Color",
            key: 'color'
        },
        // {
        //     displayName: "Password",
        //     key: 'password'
        // },
        {
            displayName: "Ac",
            key: 'ac'
        },
        {
            displayName: "GPS",
            key: 'gps'
        },
        {
            displayName: "Blutooth",
            key: 'bluetooth'
        },
        {
            displayName: "Usb port",
            key: 'usbport'
        },
        {
            displayName: "Type",
            key: 'type'
        },
        {
            displayName: "Rent",
            key: 'rent'
        },
        // {
        //     displayName: "Status",
        //     key: 'confirmation'
        // },
    ]
    const approvedBtnArr = [
        {
            displayName: "Approved",
            key: 'approvedBtn'
        },

    ]

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Box>
                <Header label="Cars" logo={studentsIcon} btnArray={btnArr} />
                {isLoading ? <Loading /> : <CRGrid datasource={students} title="" cols={cols} approvedBtn={approvedBtnArr} route="../cars-details" />}
                {/* <Container>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}> Students </Typography>
                    <br />
                    <Row className='textCenter mt-3'>

                        <Col sm={12} md={6}>

                        </Col>

                    </Row>
                </Container> */}
            </Box>
        </>
    );
}

export default Students;