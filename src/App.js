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
    fetch("http://localhost:3000/loactions")
    .then((r) => r.json())
    .then((data) => setLocationList(data))
  }, []);

  const handleClick = (location) => {
    if (!addedLocations.includes(location)) {
      setAddedLocations([...addedLocations, location])
    }
  };
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ListContainer locationList={locationList} addToMyList={handleClick} />
        </Route>
        <Route path="/add">
          <AddNewLocation />
        </Route>
        <Route path="/mylist">
          <MyList myList={addedLocations} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
