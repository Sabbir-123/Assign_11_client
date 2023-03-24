import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Header from '../Components/Shared/Header';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0 zIndex'>
            <Header></Header>
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;