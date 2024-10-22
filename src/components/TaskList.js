import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};

export default TaskList;
