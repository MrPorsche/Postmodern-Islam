import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaPenNib, FaBlog } from "react-icons/fa";
import { IoIosBook, IoIosMenu, IoIosClose } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <nav
        className="bg-orange-300 h-auto"
    >
        <div
            className="flex items-center
                    font-medium justify-around"
        >
            <div
                className="z-50 p-5 md:w-auto w-full
                            flex justify-between"
            >
                <h1
                    className="cursor-pointer h-12 text-center
                                text-orange-950 hover:text-orange-100
                                hover:text-3xl ease-in duration-300
                                hover:border-b-2 hover:border-orange-950"
                >
                    PostModern <br />Islam
                </h1>
                <div
                    className="md:hidden text-3xl"
                    onClick={toggleMenu}
                >
                    {openMenu ? <IoIosClose className="cursor-pointer"/>
                    :
                    <IoIosMenu className="cursor-pointer"/>}
                </div>
            </div>
            <ul
                className="md:flex hidden uppercase
                            items-center gap-8 text-orange-100"
            >
                <li>
                    <a
                        href="/src/Components/Home.jsx"
                        className="px-3 py-4 inline-block
                        hover:text-3xl ease-in duration-300
                        hover:text-orange-950 border-orange-800
                        hover:border-b-8"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/src/Components/Home.jsx"
                        className="px-3 py-4 inline-block
                        hover:text-3xl ease-in duration-300
                        hover:text-orange-950 border-orange-800
                        hover:border-b-8"
                    >
                        Author
                    </a>
                </li>
                <li>
                    <a
                        href="/src/Components/Home.jsx"
                        className="px-3 py-4 inline-block
                        hover:text-3xl ease-in duration-300
                        hover:text-orange-950 border-orange-800
                        hover:border-b-8"
                    >
                        Book
                    </a>
                </li>
                <li>
                    <a
                        href="/src/Components/Home.jsx"
                        className="px-3 py-4 inline-block
                        hover:text-3xl ease-in duration-300
                        hover:text-orange-950 border-orange-800
                        hover:border-b-8"
                    >
                        Blog
                    </a>
                </li>
            </ul>
            <div
                className="md:block hidden"
            >
                <button
                        className="bg-orange-700 text-orange-100
                                    px-5 py-2 rounded-full hover:font-bold
                                    hover:bg-orange-100 hover:text-orange-700
                                    hover:text-3xl ease-in duration-300 hover:scale-110"
                >
                    Contact
                </button>
            </div>
            {/* Moibile Nav */}
            <div
                className={`md:hidden ${openMenu ? ''
                :
                'hidden scale-110 ease-in-out duration-100'}
                bg-orange-300/70 absolute w-full h-full
                bottom-0 py-24 pl-4`}
            >
                <div
                    className="flex flex-col"
                >
                    <div
                        className="pb-5 pl-32"
                    >
                        <a
                            href="#home"
                            className="px-3 py-7 w-[75%] flex justify-center
                                        items-center rounded-full shadow-lg
                                    bg-orange-200 shadow-orange-900 m-2 p-4
                                        hover:text-3xl ease-in duration-300
                                        hover:scale-110"
                        >
                            <AiFillHome size={20}/>
                            <span className="pl-4 ">
                                Home
                            </span>
                        </a>
                    </div>
                    <div
                        className="pb-5 pl-32"
                    >
                        <a
                            href="#author"
                            className="px-3 py-7 w-[75%] flex justify-center
                                        items-center rounded-full shadow-lg
                                    bg-orange-200 shadow-orange-900 m-2 p-4
                                        hover:text-3xl ease-in duration-300
                                        hover:scale-110"
                        >
                            <FaPenNib size={20}/>
                            <span className="pl-4">Author</span>
                        </a>
                    </div>
                    <div
                        className="pb-5 pl-32"
                    >
                        <a
                            href="#book"
                            className="px-3 py-7 w-[75%] flex justify-center
                                        items-center rounded-full shadow-lg
                                    bg-orange-200 shadow-orange-900 m-2 p-4
                                        hover:text-3xl ease-in duration-300
                                        hover:scale-110"
                        >
                            <IoIosBook size={20}/>
                            <span className="pl-4">Book</span>
                        </a>
                    </div>
                    <div
                        className="pl-32"
                    >
                        <a
                            href="#blog"
                            className="px-3 py-7 w-[75%] flex justify-center
                                        items-center rounded-full shadow-lg
                                    bg-orange-200 shadow-orange-900 m-2 p-4
                                        hover:text-3xl ease-in duration-300
                                        hover:scale-110"
                        >
                            <FaBlog size={20}/>
                            <span className="pl-4">Blog</span>
                        </a>
                    </div>
                    <div
                        className="pt-5 pl-32"
                    >
                        <a
                            href="#contact"
                            className="px-3 py-7 w-[75%] flex justify-center
                                        items-center rounded-full shadow-lg
                                    bg-orange-200 shadow-orange-900 m-2 p-4
                                        hover:text-3xl ease-in duration-300
                                        hover:scale-110"
                        >
                            <TbMailFilled size={20}/>
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;