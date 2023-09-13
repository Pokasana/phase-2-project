import React from 'react';

function Filter({ handleChange }) {

    return (
        <div className="filter">
            <label htmlFor="category-filter">Filter by category:</label>

            <select id="category" onChange={handleChange}>
            <option value="all">All</option>
            <option value="restaurant">Restaurant</option>
            <option value="activity">Activity</option>
            <option value="shopping">Shopping</option>
            </select>
        </div>
    )
};

export default Filter;