import React, { useState } from 'react';

function AddNewLocation() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: ""
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
  };

    return (
      <div className="add-new">
        <form>
          <label htmlFor="name">Location Name:</label>
          <input type="text" id="newName" name="name" onChange={handleInput}></input><br></br>
          <label htmlFor="address">Address:</label>
          <input type="text" id="newAddress" name="address" onChange={handleInput}></input><br></br>
          <label htmlFor="category">Category:</label>
          <input type="text" id="newCategory" name="category" onChange={handleInput}></input><br></br>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  };

  export default AddNewLocation;