// src/TaskManager.js
import React, { Component } from 'react';
import TaskList from './TaskList';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
      ],
      newTask: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask.trim()) {
      const newTaskItem = {
        id: tasks.length + 1,
        text: newTask,
        completed: false
      };
      this.setState({
        tasks: [...tasks, newTaskItem],
        newTask: ''
      });
    }
  };

  toggleTaskCompletion = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    });
  };

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== taskId)
    });
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <input
          type="text"
          placeholder="Add a new task"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTask}>Add Task</button>
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
