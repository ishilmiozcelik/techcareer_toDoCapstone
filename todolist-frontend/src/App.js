import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FilterButtons from './components/FilterButtons';
import DeleteButtons from './components/DeleteButtons';
import './App.css';



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

    const handleEditTask = (id, newName) => {
        const taskToUpdate = tasks.find(task => task.id === id);
        const updatedTask = { ...taskToUpdate, name: newName };

        axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask)
            .then(response => {
                const updatedTasks = tasks.map(t =>
                    t.id === id ? response.data : t
                );
                setTasks(updatedTasks);
            });
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'todo') return !task.completed;
        return true;
    });

    return (
        <div className="App">
            <h1>Todo Input</h1>
            <div className="main-container">
                <TaskInput onAdd={handleAddTask} />

                <h2>TodoList</h2>

                <FilterButtons onFilter={handleFilter} />
                <TaskList
                    tasks={filteredTasks}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditTask}
                />
                <DeleteButtons
                    onDeleteDone={handleDeleteDoneTasks}
                    onDeleteAll={handleDeleteAllTasks}
                />
            </div>
        </div>
    );

}

export default App;
