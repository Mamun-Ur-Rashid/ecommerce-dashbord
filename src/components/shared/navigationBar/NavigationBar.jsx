import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='border'>
            <div>
                <h3 className='w-[211px] h-6 mt-[41px] ml-8 text-center'>Tajdid Store</h3>
            </div>
            <div className='h-[240px] py-[10px] px-8'>
                <ul className='space-y-2'>
                    <NavLink to='/products' className='flex justify-between mt-[49px]'>Products</NavLink>
                    <NavLink className='flex justify-between'>Analytics</NavLink>
                    <NavLink className='flex '>Billing</NavLink>
                    <NavLink className='flex '>Company</NavLink>
                    <NavLink className='flex '>Admin</NavLink>
                    <NavLink className='flex '>Logout</NavLink>
                </ul>
            </div>
            <div className='m-6 h-[244px] mt-[430px] bg-[#F5FAFF]'>
                <div>iii</div>
                <div className='w-[110px] text-center mx-auto h-7'> <h3>Help Center</h3>
                </div>
                <div className='px-4 mx-auto h-8'>
                    <p className='mt-10 text-xs font-normal leading-[16.8px] color-[#667085]'>Getting trouble on Simplebook? <br /> Reach out and solve your problem</p>
                </div>
                <div className=' w-[228px] px-2'>
                    <button className='w-full bg-[#1570EF] text-white px-[22px] py-[14px] mt-10 border rounded-lg'>Consult Now</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;