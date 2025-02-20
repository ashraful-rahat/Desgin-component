import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componenets/Navbar';

const Layout = () => {
    return (
        <div className='lg:w-10/12 lg:mx-auto w-11/12 mx-auto' >
            <div className='mb-14'>
            <Navbar></Navbar>
            </div>

            
            <Outlet></Outlet>
          
        </div>
    );
};

export default Layout;