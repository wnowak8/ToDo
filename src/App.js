import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Przykładowe dane początkowe
  const initialTasks = () => ([
    { id: 1, title: 'Zrobić zakupy' },
    { id: 2, title: 'Napisać kod' },
  ]);
  
  useEffect(() => {
    setTasks(initialTasks());
  }, []); // Pusta tablica - useEffect wywołany tylko raz, na początku
  

  const handleAddTask = (newTask) => {
    // Symulacja dodania zadania (utworzenie kopii listy z nowym zadaniem)
    setTasks([...tasks, { id: Date.now(), title: newTask.title }]);
  };

  const handleDeleteTask = (taskId) => {
    // Symulacja usunięcia zadania (utworzenie kopii listy bez usuwanego zadania)
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleUpdateTask = (updatedTask) => {
    // Symulacja aktualizacji zadania (utworzenie kopii listy z zaktualizowanym zadaniem)
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, title: updatedTask.title } : task
      )
    );
    setTaskToEdit(null);
  };

  const handleCancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskForm
        onSubmit={taskToEdit ? handleUpdateTask : handleAddTask}
        onCancel={handleCancelEdit}
        taskToEdit={taskToEdit}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
};

export default App;
