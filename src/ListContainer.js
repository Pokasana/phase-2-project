import React from 'react';
import Card from './Card';
import Filter from './Filter';

function ListContainer({ locationList }) {

    return (
      <div className="list-container">
        <Filter />

        <p>Let's explore!</p>
        {locationList.map(location => {
          const { id, name, address, category } = location;
          return <Card key={id} name={name} address={address} category={category} />
        })};

      </div>
    )
  };

  export default ListContainer;