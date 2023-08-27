import React from 'react';
import './FilterButtons.css'

function FilterButtons({ onFilter }) {
    return (
        <div className="filter-buttons">
            <button onClick={() => onFilter('all')}>All</button>
            <button onClick={() => onFilter('completed')}>Completed</button>
            <button onClick={() => onFilter('todo')}>Todo</button>
        </div>
    );
}

export default FilterButtons;