import React from 'react';

function FilterButtons({ onFilter, onDeleteDone, onDeleteAll }) {
    return (
        <div>
            <button onClick={() => onFilter("all")}>All</button>
            <button onClick={() => onFilter("completed")}>Completed</button>
            <button onClick={() => onFilter("todo")}>Todo</button>
            <button onClick={onDeleteDone}>Delete Done Tasks</button>
            <button onClick={onDeleteAll}>Delete All Tasks</button>
        </div>
    );
}

export default FilterButtons;
