import React from 'react';

function ListContainer({ locationList }) {

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