import React from "react";
import "./navbar.css";
// import Button from 'react-bootstrap/Button';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">GlazeApp</span>
          <div className="navItems">
            <button className="navButton button-7">Register</button>
            <button class="navButton button-7">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
