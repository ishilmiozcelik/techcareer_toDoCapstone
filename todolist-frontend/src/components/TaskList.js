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
                        //edit modundaysa task adını düzenlemek için girdiyi oluştur
                        <div className="task-content">
                            <input
                                type="text"
                                value={editedName}
                                onChange={e => setEditedName(e.target.value)}
                            />
                        </div>
                    ) : (
                        //// edit modunda değilse görev adını ve tamamlanma durumunu görüntüle
                        <div className="task-content" onClick={() => onToggle(task.id)}>
                            {task.completed ? "✓" : "○"} {task.name}
                        </div>
                    )}

                    <div className="task-actions">
                        {editTaskId === task.id ? (
                            //edit modundaki taskler için save butonu
                            <button className="save-button" onClick={() => {
                                onEdit(task.id, editedName);
                                setEditTaskId(null);
                            }}>save</button>
                        ) : (
                            //edit modunda olmayan taskler için edit butonu
                            <button className="edit-button" onClick={() => {
                                setEditedName(task.name);
                                setEditTaskId(task.id);
                            }}>edit</button>
                        )}
                        <button className="delete-button" onClick={() => onDelete(task.id)}>delete</button>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default TaskList;
