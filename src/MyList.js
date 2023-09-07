import React from 'react';

function MyList() {
    return (
      <div className="myList">
      <h3>My List</h3>
      <ul className="locationCard">
        <li>Location Name</li>
        <li>Location Address</li>
        <li>Category: category</li>
        <button>Get coupon</button>
      </ul>
      </div>
    )
  };

  export default MyList;