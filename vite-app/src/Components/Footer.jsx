import React from 'react';

const Footer = () => {
  return (
    <div className="text-center p-4 text-gray-500 font-bold text-shadow text-2xl">
      &copy; {new Date().getFullYear()} All rights reserved.
    </div>
  );
}

export default Footer;