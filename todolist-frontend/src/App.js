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

    //backendden taskleri getirme işlemi
    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => {
                setTasks(response.data);
            });
    }, []);

    //yeni task eklememizi sağlayan fonksiyon
    const handleAddTask = (name) => {
        axios.post('http://localhost:8080/api/tasks', { name, completed: false })
            .then(response => {
                setTasks([...tasks, response.data]);
            });
    };

    //task tamamlanma durumunu değiştirmemizi sağlayan fonksiyon
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

    //id'ye göre task silme
    const handleDeleteTask = (id) => {
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
            .then(() => {
                const remainingTasks = tasks.filter(t => t.id !== id);
                setTasks(remainingTasks);
            });
    };

    //taskleri filtreleme
    const handleFilter = (type) => {
        setFilter(type);
    };

    //tamamlanmış tasklerimizi silmemizi sağlayan fonksiyon
    const handleDeleteDoneTasks = () => {
        const doneTasks = tasks.filter(task => task.completed);
        const deletePromises = doneTasks.map(task => axios.delete(`http://localhost:8080/api/tasks/${task.id}`));

        Promise.all(deletePromises).then(() => {
            const remainingTasks = tasks.filter(task => !task.completed);
            setTasks(remainingTasks);
        });
    };

    //tüm tasklerimizi silmemizi sağlayan fonksiyon
    const handleDeleteAllTasks = () => {
        const deletePromises = tasks.map(task => axios.delete(`http://localhost:8080/api/tasks/${task.id}`));

        Promise.all(deletePromises).then(() => {
            setTasks([]);
        });
    };

    //task'i editlememizi sağlayan fonksiyon
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

    //varsayılan filtreleme özelliklerine göre filtrele
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'todo') return !task.completed;
        return true;
    });


    //önyüz render
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
