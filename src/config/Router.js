import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Generic_Login from '../Components/Generic_Login';
import Signup from '../Components/Signup';
import NotFound from './NotFound';
import Success from '../Dashboards/Institute/screens/Success'
import NoAccess from './NoAccess';
import ProtectedRoute from '../Components/ProtecttedRoutes';
import FComponents from '../FComponents/FComponents';
import BookNow from '../Components/BookNow';
import SuccessPage from './success';
import TranspoterAdmin from '../Dashboards/Transporter/admin'


function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path='*' element={<NotFound />} />
                <Route path='access-denied' element={<NoAccess />} />
                <Route path="success" element={<Success />} />

                {/* FComponents */}
                <Route path='/' element ={<FComponents/>} />
                <Route path='book-now' element ={<ProtectedRoute Component={()=>{ return(<BookNow/>)}} />} />
                <Route path='success' element ={<SuccessPage/>} />
                <Route path='login' element = {<Generic_Login/>} />
                <Route path='signup' element = {<Signup/>} />
                <Route path='admin/tranpoter/dashboard/*' element ={<ProtectedRoute Component={()=>{ return(<TranspoterAdmin/>)}}/>} />
                {/* <Route path='login' element={<ProtectedRoute Component={()=>{ return(<Generic_Login/>)}}/>}/> */}

            </Routes>
        </BrowserRouter>
    );
}

export default Router;