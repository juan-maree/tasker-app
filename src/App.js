import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskerContainer from './components/TaskerContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Tasker</h1>
        </div>
        <TaskerContainer />
      </div>
    );
  }
}

export default App;
