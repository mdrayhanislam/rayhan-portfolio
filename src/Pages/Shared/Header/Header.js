import React from 'react';
// import { Link } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';

const Header = () => {

  const menuItems =
    <>
      <li><Link smooth to="#home">Home</Link ></li>
      <li><Link smooth to="#about">About </Link></li>
      <li><Link smooth to="#skill">Skills</Link></li>
      <li><Link smooth to="#portfolio">Portfolio </Link></li>
      <li><Link smooth to="#contract">Contract   </Link></li>
    </>

  return (

    <div className="navbar bg-base-100 lg:sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {/* <li><Link to="/home">Home</Link ></li>
            <li><Link to="/about">About </Link></li>
            <li><a>Skils</a></li>
            <li><a>Services</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Blogs</a></li>
            <li><a>Contact</a></li> */}
            {menuItems}
          </ul>
        </div>
        <Link smooth to="#home" className="btn btn-ghost normal-case text-xl">Rayhan</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* <li><a>Home</a></li>
          <li><a>About </a></li>
          <li><a>Skils</a></li>
          <li><a>Services</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Blogs</a></li>
          <li><a>Contract</a></li> */}
          {menuItems}
        </ul>
      </div>

    </div>

  );
};

export default Header;