import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FooterButtons from './components/FilterButtons';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => {
                setTasks(response.data);
            });
    }, []);

    const handleAddTask = (name) => {
        axios.post('http://localhost:8080/api/tasks', { name, completed: false })
            .then(response => {
                setTasks([...tasks, response.data]);
            });
    };

    const handleToggleTask = (id) => {
        const task = tasks.find(t => t.id === id);
        const updatedTask = { ...task, completed: !task.completed };

        axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask)
            .then(response => {
                const updatedTasks = tasks.map(t =>
                    t.id === id ? response.data : t
                );
                setTasks(updatedTasks);
            });
    };

    const handleDeleteTask = (id) => {
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
            .then(() => {
                const remainingTasks = tasks.filter(t => t.id !== id);
                setTasks(remainingTasks);
            });
    };

    const handleEditTask = (taskId, newName) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, name: newName } : task
        );
        setTasks(updatedTasks);
        // Additionally, update on the backend as needed
    };

    const handleFilter = (type) => {
        setFilter(type);
    };

    const handleDeleteDoneTasks = () => {
        const doneTasks = tasks.filter(task => task.completed);
        const deletePromises = doneTasks.map(task => axios.delete(`http://localhost:8080/api/tasks/${task.id}`));

        Promise.all(deletePromises).then(() => {
            const remainingTasks = tasks.filter(task => !task.completed);
            setTasks(remainingTasks);
        });
    };

    const handleDeleteAllTasks = () => {
        const deletePromises = tasks.map(task => axios.delete(`http://localhost:8080/api/tasks/${task.id}`));

        Promise.all(deletePromises).then(() => {
            setTasks([]); // Clear all tasks from state after ensuring all deletions are complete
        });
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'todo') return !task.completed;
        return true;
    });

    return (
        <div className="App">
            <TaskInput onAdd={handleAddTask} />
            <TaskList
                tasks={filteredTasks}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
            />
            <FooterButtons
                onFilter={handleFilter}
                onDeleteDone={handleDeleteDoneTasks}
                onDeleteAll={handleDeleteAllTasks}
            />
        </div>
    );
}

export default App;
