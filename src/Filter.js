import React from 'react';

function Filter() {
    return (
        <div className="filter">
            <label>Choose category:</label>

            <select id="category">
            <option value="all">All</option>
            <option value="restaurant">Restaurant</option>
            <option value="activity">Activity</option>
            <option value="shopping">Shopping</option>
            </select>
        </div>
    )
};

export default Filter;