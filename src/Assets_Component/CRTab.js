import React from 'react';
import { Box, Typography } from '@mui/material';

function CRTab(props) {
    const {label} = props;
    return (
       <>
       <Box bgcolor='#f3f3f3' padding="14px" marginTop='10px'>
        <Typography variant="h6" >{label}</Typography>
       </Box>
       </>
    );
}

export default CRTab;