import Link from 'next/link';
import React from 'react';
import react, { useState } from 'react';
import { BsBagDash } from 'react-icons/bs';
import { AiOutlineUser  } from 'react-icons/ai';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap justify-between items-center '>
       
          <a className='inline-flex items-center p-2 mr-4 '>
           <span className='h-10 p-3 text-white w-25 s'>
             LOGO
            </span>
          </a>
      
        <button
          className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-blue-600 lg:hidden hover:text-black'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${ active ? '' : 'hidden' }  w-full lg:inline-flex p-3 lg:w-auto`}>
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
         
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white '>
                Home
              </a>
         
              <a className='items-center justify-center w-full px-3 py-2 mx-4 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'>
                Services
              </a>
           
              <a className='items-center justify-center w-full px-3 py-2 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'>
                About us
              </a>
          
              <a className='items-center justify-center w-full px-3 py-2 mx-4 font-bold text-white rounded lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'>
                Contact us
              </a>
           

           
          </div>
        </div>

        <div className="flex p-3 text-white " >
          <div  className="mx-4" >
          <AiOutlineUser size={25} />
          </div>

          <div><BsBagDash  size={25} /></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar

