import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import FilterButtons from './components/FilterButtons';

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
        />
        <FilterButtons onFilter={handleFilter} />
      </div>
  );
}

export default App;
