import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import Filter from './Filter';

function ListContainer({ locationList, addToMyList, handleChange }) {
  const history = useHistory();

    return (
      <div className="list-container">
        <h4>
          Here are recommended places to visit by travellers for travellers.<br></br>
          Please add your recommendations to the list if you don't see it!
        </h4>

        <Filter handleChange={handleChange} />

        {locationList.map(location => {
          const { id, name, address, category } = location;
          return (
            <div key={id} className="locationCard">
              <Card name={name} address={address} category={category} />
              <button onClick={() =>{
                addToMyList(location)
                history.push('/mylist')
                }}
              >Add to my list
              </button>
            </div>
            )
        })}

      </div>
    )
  };

  export default ListContainer;