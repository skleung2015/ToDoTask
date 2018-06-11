import React from "react"
import Modal from "./Modal"

class ToDoItems extends React.Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.state = {
            modal: null
        }
    }

    createTasks(item) {
        return (
            <li>
                {item.text}
                <button onClick={() => this.showModal(item.key)}>Edit</button>
                <button onClick={() => this.delete(item.key)}>Delete</button>
            </li>
        )
    }

    delete(key) {
        this.props.delete(key)
    }

    closeModal() {
        this.setState({
            ...this.state,
            modal: null
        })
    }

    showModal(key) {
        this.setState({
            ...this.state,
            modal: <Modal keyValue={key} close={this.closeModal} />
        })
    }

    render() {
        const toDoEntries = this.props.entries
        const listTasks = toDoEntries.map(this.createTasks)

        return (
            <div>
                <ul className="theList">{listTasks}</ul>
                {this.state.modal}
            </div>
        )
    }
}

export default ToDoItems
