import React from 'react';

function Header() {
    return (
      <header>
        <h1>Visit Honolulu</h1>
        <NavBar />
      </header>
    )
  };

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

  export default Header;