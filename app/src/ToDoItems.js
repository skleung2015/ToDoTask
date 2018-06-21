import React from "react"
import { Button, Modal } from "reactstrap"
import "./index.css"

class ToDoItems extends React.Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
        this.handleShow = this.handleShow(this)
        this.handleClose = this.handleClose(this)
        // this.closeModal = this.closeModal.bind(this)
        // this.showModal = this.showModal.bind(this)
        this.editValue = this.editValue.bind(this)
        this.state = {
            show: false
            // key: null
        }
    }

    createTasks(item) {
        return (
            <li key={item.key}>
                {item.text}
                <button onClick={this.handleShow}>Edit</button>
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

    handleClose() {
        this.setState({ show: false })
    }

    handleShow() {
        this.setState({ show: true })
    }
    render() {
        const toDoEntries = this.props.entries
        const listTasks = toDoEntries.map(this.createTasks)
        console.log(listTasks)
        return (
            <div>
                <ul className="theList">{listTasks}</ul>
                <div className="modal-container" style={{ height: 200 }}>
                    <Modal
                        show={this.state.show}
                        onHide={this.handleClose}
                        container={this}
                        aria-labelledby="contained-modal-title"
                    >
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Task List</Modal.Title>
                            </Modal.Header>
                            <div>
                                <Modal.Body>
                                    Task:
                                    <input
                                        type="text"
                                        ref={a => (this.newValue = a)}
                                    />
                                </Modal.Body>
                            </div>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button
                                    bsStyle="primary"
                                    onClick={() =>
                                        this.editValue(
                                            this.state.key,
                                            this.newValue.value
                                        )}
                                >
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ToDoItems
