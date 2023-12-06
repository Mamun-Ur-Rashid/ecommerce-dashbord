import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCircleQuestion , FaAngleDown, FaStroopwafel,FaRegUser} from "react-icons/fa6";


const NavigationBar = () => {
    return (
        <div className='shadow-lg'>
            <div>
                <h3 className='w-[211px] h-6  pt-[41px] text-center text-blue-400 font-bold flex justify-center items-center gap-2'><FaStroopwafel /> Tajdid Store</h3>
            </div>
            <div className='h-[240px] py-[10px] px-8'>
                <ul className='space-y-2'>
                    <NavLink to='/products' className='flex justify-between mt-[49px]'>Products</NavLink>
                    <NavLink className='flex justify-between items-center'>Analytics <FaAngleDown /></NavLink>
                    <NavLink className='flex justify-between items-center '>Billing <FaAngleDown /></NavLink>
                    <NavLink className='flex  justify-between items-center'>Company <FaAngleDown /></NavLink>
                    <NavLink className='flex  items-center gap-2 '><FaRegUser /> Admin</NavLink>
                    <NavLink className='flex '>Logout</NavLink>
                </ul>
            </div>
            <div className='relative m-6 h-[244px] mt-[430px] bg-[#F5FAFF] rounded-lg'>
                <div className='absolute -top-6 ml-[90px] w-14 h-14 rounded-full bg-white flex text-center items-center justify-center'>
                    <p><FaCircleQuestion className='text-blue-400' /></p>
                </div>
                <div className='w-[110px] text-center mx-auto h-7 pt-14 text-[#101828]'> <h3 className='text-lg font-semibold'>Help Center</h3>
                </div>
                <div className='px-4 mx-auto h-8'>
                    <p className='mt-12 text-xs font-normal leading-[16.8px] color-[#667085]'>Getting trouble on Simplebook? <br /> Reach out and solve your problem</p>
                </div>
                <div className=' w-[228px] px-2'>
                    <button className='w-full bg-[#1570EF] text-white px-[22px] py-[14px] mt-10 border rounded-lg'>Consult Now</button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;