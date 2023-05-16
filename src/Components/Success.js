import React from 'react';
import {Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Success(props) {
    return (
        <>
            <Box className="p-5 mt-5 text-center">
                <Typography variant="h1" className="text-success">
                    Success!
                </Typography>
                <Box>
                    {/* <img src={ladybug} width="100px" /> */}
                </Box>
                <Typography variant="h4" className="text-success">
                    Your response has been submitted successfully...
                </Typography>
                <CheckCircleIcon fontSize='large' />
                <Typography variant="h4" className="">
                    Soon you will get confirmation email.
                </Typography>
                {/* <Link to='/'>
      <Button
        variant="contained"
        className="mt-4"
      >
        Back to Home
      </Button>
      </Link> */}
            </Box>
        </>
    );
}

export default Success;