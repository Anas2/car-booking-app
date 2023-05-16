import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ladybug from '../Images/ladybug.gif'

function NotFound() {


  return (
  <>
    <Box className="p-5 mt-5 text-center">
      <Typography variant="h1" className="">
        404!
      </Typography>
     <Box>
        <img src={ladybug} width="100px" />
     </Box>
      <Typography variant="h4" className="">
        Oops! The page you requested could not be found.
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

export default NotFound;
