import React, { useState } from 'react';

function TaskInput({ onAdd }) {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName.trim()) {
            onAdd(taskName);
            setTaskName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                placeholder="Enter task name..."
            />
            <button type="submit">Add New Task</button>
        </form>
    );
}

export default TaskInput;
