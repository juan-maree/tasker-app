import React, { Component } from 'react';
import axios from 'axios'

class TaskerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  getTasks() {
    axios.get('/api/v1/tasks_json').then(response => {
      this.setState({tasks: response.data})
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTasks()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text" 
            placeholder="Add a task" maxLength="50" />
        </div>  	    
        <div className="listWrapper">
          <ul className="taskList">
            {this.state.tasks.map((task) => {
              return (
                <li className="task" task={task} key={task.id}>
                  <input className="taskCheckbox" type="checkbox"/>
                  <label className="taskLabel">{task.name}</label>
                  <span className="deleteTask">x</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>  
    )
  }
}

export default TaskerContainer