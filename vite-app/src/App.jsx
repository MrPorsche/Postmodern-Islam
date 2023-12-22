import React from 'react';
import Navbar from './Components/Navbar';
import Author from './Components/Author';
import Book from './Components/Book';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {

  return (
    <section id='home'
        className="font-Poppins h-screen bg-BackCover
                    bg-cover md:bg-top bg-center">
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/5">
        <h2
          className="text-shadow text-shadow-white text-shadow-blur-2
                    md:text-3xl text-xl text-orange-600  font-semibold pb-4"
         >
          A Restrictive Definition of Secular and Religion
        </h2>
        <h1
          className="md:text-8xl text-3xl text-orange-800 font-bold py-5 uppercase
                    border-t-4 text-shadow text-shadow-white text-shadow-blur-5"
        >
          PostModern Islam
        </h1>
      </div>
      <div className="flex justify-between mx-40">
        <div>
          <button
                className="bg-transparent text-orange-100 px-5 py-2 rounded-full
                        border-white border-[1px] hover:font-bold hover:bg-orange-100
                          hover:text-shadow hover:text-shadow-orange-950
                        hover:text-orange-800 hover:text-3xl ease-in duration-500 hover:scale-110"
          >
            Buy Book
          </button>
        </div>
        <div>
          <button
                className="bg-transparent text-orange-100 px-5 py-2 rounded-full
                        border-white border-[1px] hover:font-bold hover:bg-orange-100
                          hover:text-shadow hover:text-shadow-orange-950
                        hover:text-orange-800 hover:text-3xl ease-in duration-500 hover:scale-110"
          >
            Download Book
          </button>
        </div>
      </div>
      {/* <Author />
      <Book />
      <Blog />
      <Contact /> */}
    </section>
  )
}

export default App;