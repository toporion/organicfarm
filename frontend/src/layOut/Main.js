import React from 'react';
import { Outlet } from 'react-router-dom';
import TopMenu from '../components/TopMenu';
import MainMenu from '../components/MainMenu';
import Footer from '../pages/footer/Footer';

const Main = () => {
    return (
        <div>
            <TopMenu/>
            <MainMenu/>
            <Outlet/>   
            <Footer/>
        </div>
    );
};

export default Main;