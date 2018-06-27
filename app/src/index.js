import React from "react"
// import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import ReactDOM from "react-dom"
import ToDoItems from "./ToDoItems"
import "./index.css"

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.ComponentDidMount = this.ComponentDidMount(this)
    }

    getTasks() {
        fetch("http://localhost:7000/tasks")
            .then(response => response.json())
            .then(parseJSON =>
                parseJSON.results.map(task => ({
                    task: `${task.Task}`,
                    identifier: `${task.Identifier}`
                }))
            )
            .then(tasks =>
                this.setState({
                    tasks
                })
            )
            .catch(error => this.setState({ error, isLoading: false }))
    }

    ComponentDidMount() {
        this.getTasks()
    }

    addTask(event) {
        if (this.inputElement.value !== "") {
            const newTask = {
                text: this.inputElement.value,
                key: Date.now()
            }
            this.setState(prevState => ({
                tasks: prevState.tasks.concat(newTask)
            }))
        }

        this.inputElement.value = ""
        console.log(this.state.tasks)
        console.log(event)
        event.preventDefault()
    }

    deleteTask(key) {
        const filteredItems = this.state.tasks.filter(item => item.key !== key)

        this.setState({
            tasks: filteredItems
        })
    }

    editTask(key, newValue) {
        console.log(key)
        const filteredItems = this.state.tasks.filter(item => item.key !== key)
        this.setState({
            tasks: filteredItems
        })

        if (newValue !== "") {
            const editedTask = {
                text: newValue,
                key
            }
            this.setState(previousState => ({
                tasks: previousState.tasks.concat(editedTask)
            }))
        }
        console.log(this.state.tasks)
        event.preventDefault()
    }

    render() {
        return (
            <div className="toDoInterface">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        Task:
                        <input type="text" ref={a => (this.inputElement = a)} />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div>
                    <ToDoItems
                        entries={this.state.tasks}
                        delete={this.deleteTask}
                        editValue={this.editTask}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<TaskForm />, document.getElementById("root"))
