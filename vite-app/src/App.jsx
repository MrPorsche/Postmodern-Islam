import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Author from './Components/Author';
import Book from './Components/Book';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {

  return (
    <div
        className="font-Poppins h-screen bg-BackCover
                    bg-cover md:bg-top bg-center">
      <Navbar />
      <Home />
      {/* <Author />
      <Book />
      <Blog />
      <Contact /> */}
    </div>
  )
}

export default App;