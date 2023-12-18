import React, { useState } from 'react'
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className='bg-orange-400 drop-shadow-2xl'>
        <nav className='flex items-center justify-between w-[92%] h-16 mx-auto'>
            <div id='main' className='w-[10rem] p-1 text-center cursor-pointer hover:text-orange-100 hover:text-xl ease-in duration-300 flex flex-col items-center hover:border-b-8 hover:border-orange-100'>
                <h1 className=''>Post Modern</h1>
                <h1>Islam</h1>
            </div>
            <div className={`md:static absolute bg-orange-400 md:min-h-fit min-h-[50vh] left-0 ${isMenuOpen ? 'top-[6.7%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    <li>
                        <a className='p-1 text-orange-100 hover:text-3xl ease-in duration-300 hover:text-orange-950 hover:border-b-8 hover:border-orange-800' href="#main">Home</a>
                    </li>
                    <li>
                        <a className='p-1 text-orange-100 hover:text-3xl ease-in duration-300 hover:text-orange-950 hover:border-b-8 hover:border-orange-800' href="#author">Author</a>
                    </li>
                    <li>
                        <a className='p-1 text-orange-100 hover:text-3xl ease-in duration-300 hover:text-orange-950 hover:border-b-8 hover:border-orange-800' href="#book">Book</a>
                    </li>
                    <li>
                        <a className='p-1 text-orange-100 hover:text-3xl ease-in duration-300 hover:text-orange-950 hover:border-b-8 hover:border-orange-800' href="#blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-orange-700 text-orange-100 px-5 py-2 rounded-full hover:bg-orange-100 hover:text-orange-700 hover:text-xl ease-in duration-300'>Contact</button>
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