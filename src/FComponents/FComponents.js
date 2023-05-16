import React from 'react';
import NavBar from './navBar/navbar';
import Categories from './categories/categories';
import Banner from './banner/banner';
import Slider from './slider/slider';
import MainContent from './main-content/mainContent';
import Banner1 from './banner/banner';


function FComponents(props) {
    return (
        <div>
            <NavBar />
            <Categories />
            <Banner />
            <br/>
            <br/>
            {/* <Slider /> */}
            <MainContent />
            <br/>
            <br/>
            <Banner1 />
        </div>
    );
}

export default FComponents;