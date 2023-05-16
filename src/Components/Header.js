import React, { useState } from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid'; // Grid version 1
import { Box } from '@mui/material';
import CRButton from '../Assets_Component/CRButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Header(props) {


    // const {func,label,logo,btnLabel} = props;
    const {label,logo,btnArray} = props;
    console.log(btnArray);
    let goBack =()=>{
        window.history.back();
    }
  
    return (
        <>
            <Box bgcolor='#ebebeb' padding="14px" marginBottom="15px">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} textAlign="left">
                        <Item fontWeight="Bold" fontSize="20px" marginTop="2px" textTransform="uppercase" fontFamily="fantasy">{<ArrowBackIcon onClick={goBack} />}{<img src={logo} width="34px" style={{ marginRight: "5px",marginLeft:"10px" }} />}{label}</Item>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <Item>
                            {btnArray.map((x,i)=>{
                            return <CRButton key={i} label={x.displayName} func={x.func} />
                            })}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Header;