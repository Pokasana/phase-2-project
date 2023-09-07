import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer';

function App() {

  function AddNewLocation() {
    return (
      <div className="add-new">
        <form>
          <label for="name">Location Name:</label>
          <input type="text" id="newName"></input>
          <label for="address">Address:</label>
          <input type="text" id="newAddress"></input>
          <label for="category">Category:</label>
          <input type="text" id="newCategory"></input>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  };

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
