import React from 'react';
import NavBar from './NavBar';

function Header() {
    return (
      <header>
        <h1 id='title'>Visit Honolulu</h1>
        <p>
          Here are recommended places to visit by travellers for travellers.<br></br>
          Please add your recommendations to the list if it's not in the list!
        </p>
        <NavBar />
      </header>
    )
  };
  
  export default Header;