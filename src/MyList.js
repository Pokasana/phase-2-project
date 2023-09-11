import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

function MyList({ myList }) {

    return (
      <div className="myList">
        <h3>My List</h3>
        {myList === true
          ? myList.map(location => <Card key={location.id} name={location.name} address={location.address} category={location.category} />)
          : <Link to="/">Add locations to your list!</Link>
        }
      </div>
    )
  };

  export default MyList;