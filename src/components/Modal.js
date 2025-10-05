import React, { useState } from 'react';

const Modal = ({ task, editTask, closeModal }) => {
  const [title, setTitle] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() === '') return;
    editTask({ ...task, title });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit">Save</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
