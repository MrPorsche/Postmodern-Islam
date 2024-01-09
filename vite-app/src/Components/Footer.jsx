import React from 'react';

const Footer = () => {
  return (
    <div className="text-center p-4 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} All rights reserved.
    </div>
  );
}

export default Footer;