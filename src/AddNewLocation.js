import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddNewLocation({ addNewLocation }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: ""
  });

  const history = useHistory();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {...formData};
    addNewLocation(newItem);
    setFormData({
      name: "",
      address: "",
      category: ""
    })
  };

  // 

    return (
      <div className="add-new">
        <form autocomplete="off" onSubmit={(e) => {handleSubmit(e); history.push('/') }}>
          <label htmlFor="name">Location Name:</label>
          <input type="text" id="newName" name="name" value={formData.name} onChange={handleInput}></input><br></br>
          <label htmlFor="address">Address:</label>
          <input type="text" id="newAddress" name="address" value={formData.address} onChange={handleInput}></input><br></br>
          <label htmlFor="category">Category:</label>
          <select id="newCategory" name="category" value={formData.category} onChange={handleInput}>
            <option>- Select category -</option>
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