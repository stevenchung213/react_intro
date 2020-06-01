import React from 'react';
import { hot } from 'react-hot-loader/root';
import TaskList from "./TaskList";

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      /*
        {
          due: user input due date,
          task: what they want to do,
          completed: false
        }
      */
      taskInput: '',
      dueDateInput: '',
      view: 'main'
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleUserInput(e){
    const key = e.target.name;
    this.setState({
      [key]: e.target.value
    });
  }

  addTodo(){
    const taskObj = {
      taskInput: this.state.taskInput,
      dueDateInput: this.state.dueDateInput,
      completed: false,
    };
    console.log(taskObj);
    // reset input state aka erase their text
    this.setState({
      taskInput: '',
      dueDateInput: ''
    });
    // update our this.state.data array by pushing this object in
    const newData = [...this.state.data];
    newData.push(taskObj);
    this.setState({data: newData});
  }

  deleteTask(i){
    const newData = [...this.state.data];
    newData.splice(i, 1);
    this.setState({data: newData});
  }

  completeTask(i){
    const newData = [...this.state.data];
    newData[i].completed = !newData[i].completed;
    this.setState({data: newData});
  }

  changeView(){
    if (this.state.view === 'main') {
      this.setState({view: 'other'})
    } else {
      this.setState({view: 'main'})
    }
  }

  render() {
    return (
      <div>
        {
          <TaskList
            data={this.state.data}
            deleteTask={this.deleteTask}
            completeTask={this.completeTask}
          />
        }
        <br />
        <br />
        <input
          name={'taskInput'}
          placeholder={'type task here'}
          type="text"
          value={this.state.taskInput}
          onChange={this.handleUserInput}
        />
        <br />
        <input
          name={'dueDateInput'}
          placeholder={'enter due date'}
          type="text"
          value={this.state.dueDateInput}
          onChange={this.handleUserInput}
        />
        <br />
        <button onClick={this.addTodo}>add todo</button>

        <button onClick={this.changeView}>change view</button>
        {
          this.state.view === 'main' &&
          <div style={{ width: '100%', height: '90vh', backgroundColor: 'lightblue' }}>we are in the main view</div>
        }
        {
          this.state.view === 'other' &&
            <div style={{width: '100%', height:'90vh', backgroundColor: 'orange'}}>some other view</div>
        }
      </div>
    );
  }
}

export default hot(Main);
