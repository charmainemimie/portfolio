'use client';

import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";

export default function NavigBar() {
  return (
    <Navbar
      fluid
      
      className=" bg-gray-900  "
    >
      <Navbar.Brand href="/">

        <span className="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">
        Charmaine
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-white py-2 hover:bg-gray-500'>
            Home
          </p>
        </Link>

        <Link to="/about" className='text-white hover:bg-gray-500 py-2 '>
          About
        </Link>

        <Link to="/services" className='text-white  hover:bg-gray-500 py-2 '>
          Services
        </Link>
     
      </Navbar.Collapse>
    </Navbar>
  )
}


// import { Link } from "react-router-dom";
//import { GiHamburgerMenu } from "react-icons/gi";
//import  { useState } from "react";
//import Expand from "./Expand";

/* const btn=document.querySelector("#expand");
const menulist = document.querySelector("#navbar-sticky");

btn.addEventListener('click', ()=> {
const expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  menulist.classList.toggle('is-active'); 
  console.log("clicked")
}); 

  const Header = () => {
 

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mb-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://www.linkedin.com/in/charmaine-simangaliso-m-366770199/"
          className="flex items-center"
          target="_blank"
          rel="noreferrer"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Charmaine
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            id="expand"
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
           
          >
            {/* <GiHamburgerMenu /> 
      /*       <Expand/>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li> 
               <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
         
      </div>
    </nav>
  );
};

export default Header;
*/
