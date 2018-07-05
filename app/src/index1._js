import React from "react"
// import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import ReactDOM from "react-dom"
import ToDoItems from "./ToDoItems"
import "./index.css"
import styled from "styled-components"
import { Provider } from "react-redux"
import store from "./store.js"

const Header = styled.div`
    background-color: papayawhip;
    height: 70px;
    font-size: 16px;
    color: black;
`

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
`

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    width: 165px;
`
const store = createStore(() => [], {}, applyMiddleware())

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
    }

    getTasks() {
        const self = this
        fetch("http://localhost:7000/tasks")
            .then(response => response.json())
            .then(data => {
                data.data.forEach(item => {
                    console.log(item)
                    const newItem = {
                        text: item.Task,
                        key: item.Identifier
                    }
                    self.setState(prevState => ({
                        tasks: prevState.tasks.concat(newItem)
                    }))
                })
            })
            .catch(error => this.setState({ error, isLoading: false }))
    }

    componentDidMount() {
        this.getTasks()
    }

    addTask(event) {
        const text = this.inputElement.value
        const key = Date.now()

        fetch(`http://localhost:7000/addTask?task=${text}&identifier=${key}`)
            .then(() => {
                const newTask = {
                    text,
                    key
                }
                this.setState(prevState => ({
                    tasks: prevState.tasks.concat(newTask)
                }))
            })
            .catch(error => this.setState({ error, isLoading: false }))
        this.inputElement.value = ""
        console.log(this.state.tasks)
        event.preventDefault()
    }

    deleteTask(key) {
        fetch(`http://localhost:7000/deleteTask?identifier=${key}`).then(() => {
            const filteredItems = this.state.tasks.filter(
                item => item.key !== key
            )
            this.setState({
                tasks: filteredItems
            })
        })
    }

    editTask(key, newValue) {
        fetch(
            `http://localhost:7000/editTask?task=${newValue}&identifier=${key}`
        ).then(() => {
            const filteredItems = this.state.tasks.filter(
                item => item.key !== key
            )
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
        })
        console.log(this.state.tasks)
        event.preventDefault()
    }

    render() {
        const { tasks } = this.state
        console.log(tasks)
        return (
            <Provider store={store}>
                <div>
                    <Header>
                        <form onSubmit={this.addTask}>
                            Task:
                            <input
                                type="text"
                                ref={a => (this.inputElement = a)}
                            />
                            <Button type="submit">Add</Button>
                        </form>
                    </Header>
                    <div>
                        <ToDoItems
                            entries={this.state.tasks}
                            delete={this.deleteTask}
                            editValue={this.editTask}
                        />
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<TaskForm />, document.getElementById("root"))
