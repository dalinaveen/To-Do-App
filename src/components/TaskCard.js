import React from 'react';

const TaskCard = ({ task, deleteTask, openEditModal }) => {
  return (
    <div className="task-card">
      <p>{task.title}</p>
      <div className="buttons">
        <button onClick={() => openEditModal(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
