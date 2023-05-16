import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from "@mui/material";

function Loading(props) {

    return (
        <>
            <Box sx={{ textAlign:"center" }}>
                <LinearProgress />
            </Box>
        </>
    );
}

export default Loading;