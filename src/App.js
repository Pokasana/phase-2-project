import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import ListContainer from './ListContainer';
import AddNewLocation from './AddNewLocation';
import MyList from './MyList';

function App() {
  const [locationList, setLocationList] = useState([]);
  const [addedLocations, setAddedLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/locations")
    .then((r) => r.json())
    .then((data) => setLocationList(data))
  }, []);

  const handleClick = (location) => {
    if (!addedLocations.includes(location)) {
      setAddedLocations([...addedLocations, location])
    }
  };

  const handleSubmit = (newItem) => {
    return fetch("http://localhost:3000/locations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    })
    .then(r => r.json())
    .then(item => setLocationList(item));
  }

  //on submit, i would like to post a new data to the API
  //and also add the data into the internal data on React to render it on the DOM
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ListContainer locationList={locationList} addToMyList={handleClick} />
        </Route>
        <Route path="/add">
          <AddNewLocation addNewLocation={handleSubmit} />
        </Route>
        <Route path="/mylist">
          <MyList myList={addedLocations} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
