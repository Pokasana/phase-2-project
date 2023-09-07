import React from 'react';

function ListContainer() {
    return (
      <div className="list-container">
        <p>Let's explore</p>
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