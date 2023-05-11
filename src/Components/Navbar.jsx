import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Components.css";

const Navbar = () => {
  return (
    <>
      <nav id="navbar"> 
        <div id="name">BookMyMovie</div>
        <div id="links">
          <li>
            <NavLink to="/" className="nav-link">
              <span>HOME</span>
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
