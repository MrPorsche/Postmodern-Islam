import React, { useState } from 'react';
import { IoListOutline } from "react-icons/io5";
import { AiFillHome } from 'react-icons/ai';
import { FaBookReader, FaBookOpen, FaBlog } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Sidebar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div>
        <IoListOutline onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' size={20} />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a
                    href="#main"
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiFillHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a
                    href="#main"
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <FaBookReader size={20}/>
                        <span className='pl-4'>Author</span>
                    </a>
                    <a
                    href="#main"
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <FaBookOpen size={20}/>
                        <span className='pl-4'>Book</span>
                    </a>
                    <a
                    href="#main"
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <FaBlog size={20}/>
                        <span className='pl-4'>Blog</span>
                    </a>
                    <a
                    href="#main"
                    className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <TbMailFilled size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            : (
                ''
            )
        }
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a
                href="#main"
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <AiFillHome size={20}/>
                </a>
                <a
                href="#author"
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <FaBookReader size={20}/>
                </a>
                <a
                href="#book"
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <FaBookOpen size={20}/>
                </a>
                <a
                href="#blog"
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <FaBlog size={20}/>
                </a>
                <a
                href="#contact"
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
                >
                    <TbMailFilled size={20}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;