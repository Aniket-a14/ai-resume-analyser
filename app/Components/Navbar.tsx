import React from 'react';
import { Link } from 'react-router';

const Navbar = (): React.ReactElement => {
  return (
    <nav className='navbar'>
      <Link to="/">
        <p className='text-xl font-bold text-gradient'>RESUME TUNER</p>
      </Link>
      <Link to="/upload" className='primary-button w-fit'>
        <p>Upload Resume</p>
      </Link>
    </nav>
  );
};

export default Navbar;
