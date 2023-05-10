import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  return (
    <>
      <nav id="navbar"> 
        <div id="name">BookYourMovie</div>
        <div id="links">
          <li>
            <NavLink to="/" className="nav-link">
              <span>HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/details" className="nav-link">
              <span>DETAILS</span>
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
