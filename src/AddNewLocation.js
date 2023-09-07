import React from 'react';

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

  export default AddNewLocation;