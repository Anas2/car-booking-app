import React from 'react';
import transportImg from '../../../Images/transport.jpg'

function dashboard(props) {
    return (
        <div>
            <h1>Transpoter</h1>
           <div><img src={transportImg} width='100%' height='300px' /></div>
        </div>
    );
}

export default dashboard;