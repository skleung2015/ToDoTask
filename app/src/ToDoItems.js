import React from "react"
import Modal from "./Modal"

class ToDoItems extends React.Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.editValue = this.editValue.bind(this)
        this.state = {
            show: false,
            key: null
        }
    }

    createTasks(item) {
        return (
            <li key={item.key}>
                {item.text}
                <button onClick={() => this.showModal(item.key)}>Edit</button>
                <button onClick={() => this.delete(item.key)}>Delete</button>
            </li>
        )
    }

    editValue(originalKey, newValue) {
        console.log(originalKey)
        console.log(newValue)
        this.props.editValue(originalKey, newValue)
    }

    delete(key) {
        this.props.delete(key)
    }

    closeModal() {
        this.setState({
            ...this.state,
            show: false
        })
    }

    showModal(key) {
        this.setState({
            ...this.state,
            show: true,
            key
        })
    }

    render() {
        const toDoEntries = this.props.entries
        const listTasks = toDoEntries.map(this.createTasks)
        console.log(listTasks)
        return (
            <div>
                <ul className="theList">{listTasks}</ul>
                {this.state.show ? (
                    <Modal
                        keyValue={this.state.key}
                        editValue={this.editValue}
                        close={this.closeModal}
                    />
                ) : null}
            </div>
        )
    }
}

export default ToDoItems
