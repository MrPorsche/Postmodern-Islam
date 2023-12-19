import React from 'react';
import Navbar from './Navbar';  

const Home = () => {
  return (
    <section
      id='home'
      className="h-screen bg-BackCover bg-cover md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/5 border-white border-2">
        <h2 className="md:text-3xl text-xl text-orange-600  font-semibold pb-4">A Restrictive Definition of Secular and Religion</h2>
        <h1 className="md:text-8xl text-3xl text-orange-800 font-bold py-5 uppercase border-t-4">PostModern Islam</h1>
      </div>
      <div className="border-white border-2">
      <button
                        className="bg-orange-100 text-orange-700
                                    px-5 py-2 rounded-full hover:font-bold
                                    hover:bg-orange-700 hover:text-orange-100
                                    hover:text-3xl ease-in duration-300 hover:scale-110"
                >
                    Buy Book
                </button>
                <button
                        className="bg-orange-100 text-orange-700
                                    px-5 py-2 rounded-full hover:font-bold
                                    hover:bg-orange-700 hover:text-orange-100
                                    hover:text-3xl ease-in duration-300 hover:scale-110"
                >
                    Download Book
                </button>
      </div>
    </section>
  )
}

export default Home;