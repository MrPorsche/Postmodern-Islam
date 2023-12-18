import React, { useState } from 'react'
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className='bg-orange-200'>
        <nav className='flex items-center justify-between w-[92%] mx-auto'>
            <div>
                <h1 className='w-[102px] p-1 text-center'>Post Modern Islam</h1>
            </div>
            <div className={`md:static absolute bg-orange-200 md:min-h-fit min-h-[50vh] left-0 ${isMenuOpen ? 'top-[6.7%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    <li>
                        <a className='hover:text-gray-500' href="#main">Home</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#author">Author</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#book">Book</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-orange-700 text-white px-5 py-2 rounded-full hover:bg-orange-950 hover'>Contact</button>
                {
                    isMenuOpen ? (
                        <button onClick={handleToggle}>
                            <IoIosClose size={25} className='text-3xl cursor-pointer md:hidden' />
                        </button>
                    ) : (
                        <button onClick={handleToggle}>
                            <IoIosMenu size={20} className='text-3xl cursor-pointer md:hidden' />
                        </button>
                    )
                }
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar;