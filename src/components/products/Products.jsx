import React from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
    return (
        <div className='w-[1096px] p-4'>
            <header>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl font-bold'>Products</h3>
                </div>
                <div className='flex gap-5 justify-between items-center'>
                   <div>
                     <NavLink><button className=' px-[22px] py-[14px] bg-[#1570EF] rounded-lg  text-white'>Create new</button></NavLink>
                   </div>
                   <div>
                    <p cl>profile</p>
                   </div>
                </div>
            </div>
            </header>
        </div>
    );
};

export default Products;