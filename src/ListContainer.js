import React from 'react';

function ListContainer() {

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

    return (
      <div className="list-container">
        <p>Let's explore</p>

        <Card />

        <div className="filter">
        <label for="category">Choose category:</label>

        <select id="category">
          <option value="all">All</option>
          <option value="restaurant">Restaurant</option>
          <option value="activity">Activity</option>
          <option value="shopping">Shopping</option>
          <option value="Beaches">Beaches</option>
        </select>

        </div>
      </div>
    )
  };

  export default ListContainer;