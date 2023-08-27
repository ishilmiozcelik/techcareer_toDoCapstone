import React from 'react';

function FilterButtons({ onFilter }) {
    return (
        <div>
            <button onClick={() => onFilter("all")}>All</button>
            <button onClick={() => onFilter("completed")}>Completed</button>
            <button onClick={() => onFilter("todo")}>Todo</button>
        </div>
    );
}

export default FilterButtons;
