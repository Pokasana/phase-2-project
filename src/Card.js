import React from 'react';

function Card({ name, address, category }) {


    return (
      <ul >
        <li>{name}</li>
        <li>{address}</li>
        <li className="card-category">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</li>
      </ul>
    )
  }

  export default Card;