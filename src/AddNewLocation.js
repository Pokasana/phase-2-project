import React, { useState } from 'react';

function AddNewLocation() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: ""
  });


    return (
      <div className="add-new">
        <form>
          <label htmlFor="name">Location Name:</label>
          <input type="text" id="newName" name="name"></input><br></br>
          <label htmlFor="address">Address:</label>
          <input type="text" id="newAddress" name="address"></input><br></br>
          <label htmlFor="category">Category:</label>
          <input type="text" id="newCategory" name="category"></input><br></br>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  };

  export default AddNewLocation;