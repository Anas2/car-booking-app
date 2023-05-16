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

function Bookings(props) {

    const [students, setStudents] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    let approvedStudent = () => {
        navigate('../add-cars');
    }
    let getData = () => {
        getDataFromDb('bookedCars').then((res) => {
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
            displayName: "Booking",
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
            displayName: "Starting Time",
            key: 'startTime'
        },
        {
            displayName: "End Time",
            key: 'endTime'
        },
        {
            displayName: "Starting Location",
            key: 'startingLocation'
        },
        {
            displayName: "Ending Location",
            key: 'endingLocation'
        },
        {
            displayName: "Cost",
            key: 'cost'
        },
        {
            displayName: "Confirmation",
            key: 'confirmation'
        },
        
    ]
    const confirmation = [
        {
            displayName: "Confirmation",
            key: 'confirmation'
        },

    ]

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Box>
                <Header label="Bookings" logo={studentsIcon} btnArray={btnArr} />
                {isLoading ? <Loading /> : <CRGrid datasource={students} title="" cols={cols} approvedBtn={confirmation} route="../booking-details" />}
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

export default Bookings;