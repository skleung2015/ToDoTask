import React from 'react';

class ToDoItems extends React.Component{
constructor(props){
  super(props);

  this.createTasks = this.createTasks.bind(this);
  this.delete = this.delete.bind(this);
}

  createTasks(item){
    return <li onClick={() => this.delete(item.key)}
    key={item.key}>{item.text}</li>
  }

  delete(key){
    this.props.delete(key);
  }

  render(){
    var toDoEntries = this.props.entries;
    var listTasks = toDoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {listTasks}
      </ul>
    );
  }
}

export default ToDoItems;
