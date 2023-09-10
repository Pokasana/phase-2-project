import React from 'react';
import Card from './Card';

function ListContainer({ locationList }) {


    return (
      <div className="list-container">
        <p>Let's explore!</p>
        {locationList.map(location => {
          const { id, name, address, category } = location;
          return <Card key={id} name={name} address={address} category={category} />
        })}

        <div className="filter">
        <label>Choose category:</label>

        <select id="category">
          <option value="all">All</option>
          <option value="restaurant">Restaurant</option>
          <option value="activity">Activity</option>
          <option value="shopping">Shopping</option>
        </select>

        </div>
      </div>
    )
  };

  export default ListContainer;