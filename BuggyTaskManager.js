import React, { useState, useEffect } from 'react';

const BuggyTaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    console.log('Tasks updated');
  });

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length, text: newTask, completed: false }]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return task.completed;
    if (filter === 'completed') return !task.completed;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={setNewTask} 
        placeholder="New task" 
      />
      <button onClick={addTask}>Add Task</button>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <TaskStats tasks={tasks} />
    </div>
  );
};

const TaskStats = ({ tasks }) => {
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setCompletedCount(tasks.filter(task => task.completed).length);
  }, []);

  return (
    <div>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {completedCount}</p>
    </div>
  );
};

export default BuggyTaskManager;
