import React, { useState } from 'react';
import { Button, TextField, Typography } from "@mui/material";
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../config/Firebasemethods';
import { useDispatch } from 'react-redux';
import {add} from'../config/redux/reducer/loginslice';
import NavBar from '../FComponents/navBar/navbar'

function Generic_Login() {

    const dispatch = useDispatch();

    const [model, setModel] = useState();
    const navigate = useNavigate();

    const dashboardType = [
        {
            type: 'User',
            route: '/'
        },
        {
            type: 'Transpoter',
            route: '/admin/tranpoter/dashboard/'
        }
    ]

    let signIn = () => {
        loginUser("registeredUsers",model)
            .then((res) => {
                dispatch(add(res));
                console.log('Success');
                dashboardType.map((x, i) => {
                    console.log(res.type, x.type);
                    if (res.type == x.type)
                        navigate(x.route, { state: res })
                })


            }).catch((err) => { 
                // loginUser("studentRegistrationFormData",model).then((res)=>{
                //     console.log(res,model,"here we goooooo");
                //     dispatch(add(res));
                //     dashboardType.map((x, i) => {
                //         console.log(res);
                //         if (res.type == x.type && res.studentApproved == 'approved'){
                //             navigate(x.route, { state: res })
                //         }else{
                //             navigate('/access-denied', { state: res })
                //         }
                            
                //     })
                // })
            })
        console.log(model);
    }

    return (
        <>
        <Box><NavBar /></Box>
            <Box
                sx={{ height: "80vh" }}
                className="d-flex justify-content-center align-items-center "
            >
                <Box>
                    <Typography variant="h3">Login</Typography>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, email: e.target.value })}
                            variant="standard"
                            label="Email"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, password: e.target.value })}
                            variant="standard"
                            label="Password"
                            type="password"
                        />
                    </Box>
                    <Box className="p-2">
                        <Button onClick={signIn} variant="contained">
                            Login
                        </Button>
                        <Link to='../signup'>
                            <Button variant="contained" className='ms-2'>
                          Sign up
                        </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Generic_Login;