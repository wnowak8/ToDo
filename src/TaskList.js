import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => onDeleteTask(task.id)}>Usuń</button>
          <button onClick={() => onEditTask(task)}>Edytuj</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
