import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, endTime, isImportant };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setEndTime('');
    setIsImportant(false);
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <div className="importantToggle">
      <button
    className="markImportantBtn"
    onClick={() => setIsImportant((prev) => !prev)}
    >
    {isImportant ? 'Unmark as Important' : 'Mark as Important'}
    </button>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
