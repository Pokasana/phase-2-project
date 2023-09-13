import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './Header';
import ListContainer from './ListContainer';
import AddNewLocation from './AddNewLocation';
import MyList from './MyList';

function App() {
  const [locations, setLocations] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [addedLocations, setAddedLocations] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/locations")
    .then((r) => r.json())
    .then((data) => {
      setLocationList(data);
      setLocations(data);
    })
  }, []);

  const handleClick = (location) => {
    if (!addedLocations.includes(location)) {
      setAddedLocations([...addedLocations, location])
    }
  };

  const handleSubmit = (newItem) => {
    fetch("http://localhost:3000/locations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    })
    .then(r => r.json())
    .then(item => {
      setLocationList([...locationList, item]);
    })
  };

  const handleChange = (e) => {
    const filterBy = e.target.value;
    if (filterBy !== 'all') {
      const newArr = locations.filter(location => location.category === filterBy);
      setLocationList(newArr);
    } else setLocationList(locations);
};

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ListContainer locationList={locationList} addToMyList={handleClick} handleChange={handleChange} />
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
