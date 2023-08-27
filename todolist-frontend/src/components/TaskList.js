import React from 'react';

function TaskList({ tasks, onToggle, onEdit, onDelete }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span onDoubleClick={() => onEdit(task.id)}>
                        {task.name}
                    </span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
