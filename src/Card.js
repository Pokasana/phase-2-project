import React from 'react';

function Card({ name, address, category }) {
    return (
      <ul className="locationCard">
        <li>{name}</li>
        <li>{address}</li>
        <li className="card-category">Category: {category.charAt(0).toUpperCase() + category.slice(1)}</li>
        <button>Add to my list</button>
      </ul>
    )
  }

  export default Card;