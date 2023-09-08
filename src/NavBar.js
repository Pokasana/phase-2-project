import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
      <nav className="navBar">
        <a>Home</a>
        <a>About</a>
        <a>Add New Spot</a>
        <a>My List</a>
      </nav>
    )
  };

  export default NavBar;