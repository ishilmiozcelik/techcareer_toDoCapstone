import React from 'react';
import './FilterButtons.css'

function FilterButtons({ onFilter }) {
    return (
        <div className="filter-buttons">
            <button className="filter-button" onClick={() => onFilter('all')}>All</button>
            <button className="filter-button" onClick={() => onFilter('completed')}>Completed</button>
            <button className="filter-button" onClick={() => onFilter('todo')}>Todo</button>
        </div>
    );
}

export default FilterButtons;