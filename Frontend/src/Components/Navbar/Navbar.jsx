import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {

  return (
      <div className="navbar">
        <Link to="/">
        <h2>To DO App</h2>
        </Link>
      </div>
  );
};

export default Navbar;
