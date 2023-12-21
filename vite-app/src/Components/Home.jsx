import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen border-white border-2"
    >
      
      <div className="flex flex-col justify-center text-center items-center h-3/5">
        <h2 className="text-shadow text-shadow-white text-shadow-blur-2 md:text-3xl text-xl text-orange-600  font-semibold pb-4">A Restrictive Definition of Secular and Religion</h2>
        <h1 className="md:text-8xl text-3xl text-orange-800 font-bold py-5 uppercase border-t-4 text-shadow text-shadow-white text-shadow-blur-5">PostModern Islam</h1>
      </div>
      <div className="flex justify-between mx-40">
        <div className="">
          <button
                className="bg-orange-100 text-orange-700
                          px-5 py-2 rounded-full hover:font-bold
                        hover:bg-orange-700 hover:text-orange-100
                          hover:text-3xl ease-in duration-300 hover:scale-110"
          >
            Buy Book
          </button>
        </div>
        <div>
          <button
                className="bg-orange-100 text-orange-700
                          px-5 py-2 rounded-full hover:font-bold
                        hover:bg-orange-700 hover:text-orange-100
                          hover:text-3xl ease-in duration-300 hover:scale-110"
          >
            Download Book
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home;