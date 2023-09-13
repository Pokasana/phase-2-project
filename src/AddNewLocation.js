import React, { useState } from 'react';

function AddNewLocation({ addNewLocation }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {...formData};
    addNewLocation(newItem);
  };

    return (
      <div className="add-new">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Location Name:</label>
          <input type="text" id="newName" name="name" onChange={handleInput}></input><br></br>
          <label htmlFor="address">Address:</label>
          <input type="text" id="newAddress" name="address" onChange={handleInput}></input><br></br>
          <label htmlFor="category">Category:</label>
          <select id="newCategory" name="category" onChange={handleInput}>
            <option value="restaurant">Restaurant</option>
            <option value="activity">Activity</option>
            <option value="shopping">Shopping</option>
          </select><br></br>

          <input type="submit" value="Submit" ></input>
        </form>
      </div>
    )
  };

  export default AddNewLocation;