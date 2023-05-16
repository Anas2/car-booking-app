import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ladybug from '../Images/ladybug.gif'

function NoAccess(props) {
    return (
       <>
        <Box className="p-5 mt-5 text-center">
      <Typography variant="h1" className="text-danger">
        Sorry!
      </Typography>
     <Box>
        <img src={ladybug} width="100px" />
     </Box>
      <Typography variant="h4" className="">
        Your request could not be fullfield due to admin rights
      </Typography>
      <Typography variant="h4" className="">
        Your request is on pending state
      </Typography>
      <Link to='/'>
      <Button
        variant="contained"
        className="mt-4"
      >
        Back to Home
      </Button>
      </Link>
    </Box>
       </>
    );
}

export default NoAccess;