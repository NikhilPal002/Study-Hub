import React from 'react';

function Footer() {
  return (
    <footer className='bg-yellow-700 shadow-md p-3 absolute w-full h-12 bottom-0 flex items-center justify-center'>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </footer>
  );
}


export default Footer;