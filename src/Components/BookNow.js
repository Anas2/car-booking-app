import { Box, Typography } from '@mui/material';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import BookingFrom from './BookingForm';
import parse from 'html-react-parser';
import NavBar from '../FComponents/navBar/navbar';

function BookNow(props) {

    const selectedData = useLocation().state;
    console.log(selectedData);
    return (
        <>
            <Box>
                <NavBar/>
                <Box sx={{ textAlign: "left", backgroundColor: "beige" }}>
                    <Box sx={{ padding: "10px" }}><h6>HOME > BOOKING</h6></Box>
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <Box sx={{ textAlign: "left" }}>
                                    <Box sx={{ textAlign: "center" }}><h1 style={{ textTransform: "uppercase", fontSize: "30px" }}>Car Details</h1></Box>
                                    <br />
                                    <Box>{selectedData ? parse(selectedData.img) : null}</Box>
                                    
                                    <Box>
                                        <table className="table table-striped " style={{fontSize:"13px",textAlign:"center"}} >
                                            <thead>
                                                <tr>
                                                    <th>CAR</th>
                                                    <th>MODEL</th>
                                                    <th>COLOR</th>
                                                    <th>YEAR</th>
                                                    <th>Ac</th>
                                                    <th>PRICE</th>
                                                    <th>AVALABILITY</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    selectedData ? <tr>
                                                    <td>{selectedData.car}</td>
                                                    <td>{selectedData.model}</td>
                                                    <td>{selectedData.color}</td>
                                                    <td>{selectedData.model}</td>
                                                    <td>{selectedData.ac}</td>
                                                    <td>{selectedData.rent}</td>
                                                    <td><Typography variant='span' sx={{ fontWeight: "normal" }} > {selectedData.availability == "Yes" ? "Yes" : "No"}</Typography></td>
                                                </tr> : null
                                                }

                                            </tbody>
                                        </table>
                                    </Box>
                                </Box>
                            </Col>
                            <Col sm={12} md={6}>
                                <Box sx={{ textAlign: "center" }}> <h1 style={{ textTransform: "uppercase", fontSize: "30px" }}>Other Details</h1></Box>
                                <Box>
                                    <BookingFrom />
                                </Box>

                            </Col>
                        </Row>

                    </Container>
                </Box>
            </Box>

        </>
    );
}

export default BookNow;