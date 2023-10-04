import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <li>
      {task.title}
      <button onClick={() => onDelete(task.id)}>Usuń</button>
      <button onClick={() => onEdit(task)}>Edytuj</button>
    </li>
  );
};

export default TaskItem;
