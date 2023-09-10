import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import ListContainer from './ListContainer';
import AddNewLocation from './AddNewLocation';
import MyList from './MyList';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/loactions")
    .then((r) => r.json())
    .then((data) => console.log(data))
  });
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ListContainer />
        </Route>
        <Route path="/add">
          <AddNewLocation />
        </Route>
        <Route path="/mylist">
          <MyList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
