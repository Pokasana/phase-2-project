import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
      <nav className="navBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Add New Spot</NavLink>
        <NavLink to="/mylist">My List</NavLink>
      </nav>
    )
  };

  export default NavBar;