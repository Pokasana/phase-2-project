import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import AddNewLocation from './AddNewLocation';

function App() {


  function MyList() {
    return (
      <div className="myList">
      <h3>My List</h3>
      <ul className="locationCard">
        <li>Location Name</li>
        <li>Location Address</li>
        <li>Category: category</li>
        <button>Get coupon</button>
      </ul>
      </div>
    )
  };

  return (
    <div className="App">
      <Header />
      <ListContainer />
      <AddNewLocation />
      <MyList />
    </div>
  );
}

export default App;
