import React, { useState } from 'react';
import './TaskList.css';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
    const [editTaskId, setEditTaskId] = useState(null);
    const [editedName, setEditedName] = useState('');

    return (
        <div className="tasks-list">
            {tasks.map(task => (
                <div key={task.id} className="task">
                    {editTaskId === task.id ? (
                        <div className="task-content">
                            <input
                                type="text"
                                value={editedName}
                                onChange={e => setEditedName(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="task-content" onClick={() => onToggle(task.id)}>
                            {task.completed ? "✓" : "○"} {task.name}
                        </div>
                    )}

                    <div className="task-actions">
                        {editTaskId === task.id ? (
                            <button onClick={() => {
                                onEdit(task.id, editedName);
                                setEditTaskId(null);
                            }}>Save</button>
                        ) : (
                            <button onClick={() => {
                                setEditedName(task.name);
                                setEditTaskId(task.id);
                            }}>Edit</button>
                        )}
                        <button onClick={() => onDelete(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default TaskList;
