import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

function MyList({ myList }) {

    return (
      <div className="myList">
        <h3>My List</h3>
        {myList.length > 0
          ? myList.map(location => <div className="locationCard" key={location.id} ><Card name={location.name} address={location.address} category={location.category} /></div>)
          : <Link to="/">Add locations to your list!</Link>
        }
      </div>
    )
  };

  export default MyList;