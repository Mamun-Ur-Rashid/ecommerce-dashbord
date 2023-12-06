import { Container } from 'postcss';
import React from 'react';
import NavigationBar from '../components/shared/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
                <div className='flex'>
                    <div className='h-[1024px] w-[280px]'>
                    <NavigationBar></NavigationBar>
                    </div>
                    <div>
                    <Outlet></Outlet>
                    </div>

                </div>
        </div>
    );
};

export default Main;