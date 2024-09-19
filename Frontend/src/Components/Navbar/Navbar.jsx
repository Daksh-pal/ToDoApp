import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {

  return (
      <div className="navbar">
        <Link to="/">
        <h2>To Do App</h2>
        </Link>
      </div>
  );
};

export default Navbar;
