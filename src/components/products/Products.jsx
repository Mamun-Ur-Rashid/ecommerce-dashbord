// Products.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import UseProductData from '../../CustomHook/UseProductData';
import { FaTrashAlt } from "react-icons/fa";


const Products = () => {
  const { data: products, isLoading, isError } = UseProductData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching products</p>;
  }

  const truncateDescription = (description, words = 10) => {
    const wordArray = description.split(' ');
    const truncatedDescription = wordArray.slice(0, words).join(' ');
    return `${truncatedDescription}...`;
  };

  return (
    <div className='w-[1096px] p-4'>
      <header>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-2xl font-bold'>Products</h3>
          </div>
          <div className='flex gap-5 justify-between items-center'>
            <div>
              <NavLink to='/create-new'>
                <button className='px-[22px] py-[14px] bg-[#1570EF] rounded-lg text-white'>
                  Create new
                </button>
              </NavLink>
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </div>
      </header>
      {/* Product list */}
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-6'>
        {products.map((product) => (
          <div key={product.id} className='w-[348.67px] h-[378.05px] shadow-sm border gap-5 p-5 rounded-lg'>
            <div className='flex justify-center border-b'>
                <figure><img className='w-[163.45px] h-[214px] mb-2' src={product.image} alt="" /></figure>
            </div>
            <div className='flex justify-between my-4'>
                <div>
                    <p>$ {product.price}</p>
                    <p>{product.ratting}</p>
                </div>
                <div className='w-6 h-6 shadow-md flex justify-center'>
                    <p className='text-red-500'><FaTrashAlt /></p>
                </div>
            </div>
            <p>{truncateDescription(product.description, 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
