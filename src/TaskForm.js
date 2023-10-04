import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, onCancel, taskToEdit }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tytuł zadania"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{taskToEdit ? 'Edytuj zadanie' : 'Dodaj zadanie'}</button>
      <button type="button" onClick={onCancel}>
        Anuluj
      </button>
    </form>
  );
};

export default TaskForm;
