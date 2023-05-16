import { Button } from '@mui/material';
import React from 'react';

function CRButton(props) {
  const {func ,label} = props;
    return (
      <>
      <Button variant='contained' sx={{width:'122px' ,marginLeft:"8px"}} onClick={func}>{label}</Button>
      </>
    );
}

export default CRButton;