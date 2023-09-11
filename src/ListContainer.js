import React from 'react';
import Card from './Card';
import Filter from './Filter';

function ListContainer({ locationList, addToMyList }) {

    return (
      <div className="list-container">
        <Filter />

        {locationList.map(location => {
          const { id, name, address, category } = location;
          return (
            <div key={id}>
              <Card name={name} address={address} category={category} />
              <button onClick={() => addToMyList(location)}>Add to my list</button>
            </div>
            )
        })};

      </div>
    )
  };

  export default ListContainer;