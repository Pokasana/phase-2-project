import React from 'react';
import Card from './Card';

function MyList({ myList }) {

    return (
      <div className="myList">
        <h3>My List</h3>
        {myList === true
          ? myList.map(location => <Card key={location.id} />) : <p>Add locations to your list!</p>
        }
      </div>
    )
  };

  export default MyList;