import React from 'react';
import ReactDOM from 'react-dom';
import ToDoItems from "./ToDoItems";
import './index.css';

<h1 style="color:red;text-align:center;">To Do List></h1>


class TaskForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(event){
    if(this.inputElement.value !== ""){
      var newTask = {
        text: this.inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return{
          tasks: prevState.tasks.concat(newTask)
        };
      });
    }

    this.inputElement.value = "";
    console.log(this.state.tasks);
    event.preventDefault();
  }

  deleteTask(key){
    var filteredItems = this.state.tasks.filter(function(item){
      return (item.key !== key)
    });

    this.setState({
      tasks: filteredItems
    });
  }


  render(){
    return(
      <div className="toDoInterface">
        <div className="header">
          <form onSubmit = {this.addTask}>
          Task:
          <input type="text" ref={(a) => this.inputElement = a}/>
          <button type = "submit">Add</button>
          </form>
        </div>

        <div>
          <ToDoItems entries = {this.state.tasks}
                      delete = {this.deleteTask}/>
        </div>
    </div>

    );
  }
}


ReactDOM.render(
  <TaskForm />,
  document.getElementById('root')
);
