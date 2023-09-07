import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import AddNewLocation from './AddNewLocation';
import MyList from './MyList';

function App() {
  
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
