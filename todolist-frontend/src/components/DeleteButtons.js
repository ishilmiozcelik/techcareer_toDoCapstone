import React from 'react';

function DeleteButtons({ onDeleteDone, onDeleteAll }) {
    return (
        <div className="delete-buttons">
            <button onClick={onDeleteDone}>Delete Done Tasks</button>
            <button onClick={onDeleteAll}>Delete All Tasks</button>
        </div>
    );
}

export default DeleteButtons;