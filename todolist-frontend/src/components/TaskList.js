import React, { useState } from 'react';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
    const [editTaskId, setEditTaskId] = useState(null);
    const [editedName, setEditedName] = useState('');

    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    {editTaskId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={editedName}
                                onChange={e => setEditedName(e.target.value)}
                            />
                            <button onClick={() => {
                                onEdit(task.id, editedName);
                                setEditTaskId(null);
                            }}>Save</button>
                        </>
                    ) : (
                        <>
                            <span onClick={() => onToggle(task.id)}>
                                {task.completed ? "✓" : "○"} {task.name}
                            </span>
                            <button onClick={() => {
                                setEditedName(task.name);
                                setEditTaskId(task.id);
                            }}>Edit</button>
                        </>
                    )}
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
