import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@mui/material';

const StyledButton = styled.label`
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;

const FileUploader = (props) => {
    const {func} = props;
    const [file, setFile] = useState(null);
    // console.log(props);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        func(event.target.files[0].name)
    };
   
    return ( 
        <div>
            {file ?
                <Button variant="outlined" component="label" sx={{ marginTop: "30px", border: "1px solid", borderStyle: "dashed", width: "120px", height: "120px", fontSize: "13px" }}>
                    <Typography variant='span' > {file.name}</Typography>
                    <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />

                </Button>
                :
                <Button variant="outlined" component="label" sx={{ marginTop: "30px", border: "1px solid", borderStyle: "dashed", width: "120px", height: "120px", fontSize: "13px" }}>
                    <Typography variant='span' > + Upload</Typography>
                    <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                </Button>
            }
            
        </div>
    );
};

export default FileUploader;
