import React from 'react';

function Card() {
    return (
      <ul className="locationCard">
        <li>Location Name</li>
        <li>Location Address</li>
        <li className="card-category">Category: category</li>
        <button>Get coupon</button>
      </ul>
    )
  }

  export default Card;