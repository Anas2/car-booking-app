import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({

    name:"Login",
    initialState:{dummyData : "Testing"},
    reducers:{
        add(state,action){
            state.adminData = action.payload;
            state.adminData.adminName = action.payload.adminName;
            // console.log(action); 
        },
        del(){}
    }

})



export const {add,del} =  LoginSlice.actions;
export default LoginSlice.reducer;