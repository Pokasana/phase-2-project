import React from 'react';

function App() {

  function Header() {
    return (
      <header>
        <h1>Visit Honolulu</h1>
        <NavBar />
      </header>
    )
  };

  function NavBar() {
    return (
      <nav className="navBar">
        <a>Home</a>
        <a>About</a>
        <a>Add New Spot</a>
        <a>My List</a>
      </nav>
    )
  };

  function ListContainer() {
    return (
      <div className="list-container">
        <p>Let's explore</p>
        <div className="filter">
        <label for="category">Choose category:</label>

        <select id="category">
          <option value="all">All</option>
          <option value="restaurant">Restaurant</option>
          <option value="activity">Activity</option>
          <option value="shopping">Shopping</option>
          <option value="Beaches">Beaches</option>
        </select>

        </div>
      </div>
    )
  };

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
