import React, { useState, useEffect } from 'react';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
  const openEditModal = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };
  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>My To-Do App</h1>
      <TaskForm addTask={addTask} />
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} openEditModal={openEditModal} />
        ))}
      </div>

      {isModalOpen && <Modal task={taskToEdit} editTask={editTask} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
