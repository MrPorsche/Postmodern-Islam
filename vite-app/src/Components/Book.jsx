import React from 'react'
import bookCover from './bookcover.jpg'
const Book = () => {
  return (
    <div className="book">
    <img src={bookCover} alt="Book Cover" className="w-full max-w-sm rounded shadow-lg"/>
    
    <h1>Book Title</h1>
    
    <p>Book content...</p>
  
  </div>
  );
};

export default Book