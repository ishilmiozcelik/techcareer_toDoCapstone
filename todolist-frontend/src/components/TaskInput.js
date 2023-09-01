import React, { useState } from 'react';
import './TaskInput.css';


function TaskInput({ onAdd }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name);
            setName('');
        }
    };

    return (
        <div className="input-container">
            <input
                type="text"
                value={name}
                placeholder="Enter task name..."
                onChange={(e) => setName(e.target.value)}
            />
            <button className="input-button" onClick={handleSubmit}>
                Add New Task
            </button>
        </div>
    );
}

export default TaskInput;
