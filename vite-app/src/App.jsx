import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Author from "./Components/Author";
import Book from "./Components/Book";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <section
            className="font-Poppins flex flex-col h-screen
                       bg-BackCover bg-cover md:bg-top bg-center"
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      <footer>
        <h3>
          All rightss reserved.
        </h3>
      </footer>
    </section>
  )
}

export default App;