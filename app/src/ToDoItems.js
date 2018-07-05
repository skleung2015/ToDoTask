import React from "react"
import { Button, ButtonToolbar, Modal } from "react-bootstrap"
// import "./index.css"
import styled from "styled-components"

const Modalmod = styled.h1`
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-top: 100px;
    padding: 2rem;
    position: relative;
`

class ToDoItems extends React.Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        // this.closeModal = this.closeModal.bind(this)
        // this.showModal = this.showModal.bind(this)
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
                <button onClick={() => this.handleShow(item.key)}>Edit</button>
                <button onClick={() => this.delete(item.key)}>Delete</button>
            </li>
        )
    }

    editValue(originalKey, newValue) {
        console.log(originalKey)
        console.log(newValue)
        this.props.editValue(originalKey, newValue)
        this.handleClose()
    }

    delete(key) {
        this.props.delete(key)
    }

    handleClose() {
        this.setState({ show: false })
    }

    handleShow(key) {
        this.setState({ show: true, key })
    }
    render() {
        const toDoEntries = this.props.entries
        const listTasks = toDoEntries.map(this.createTasks)
        console.log(listTasks)
        return (
            <div>
                <ul className="theList">{listTasks}</ul>
                <Modalmod style={{ height: 100 }}>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title">
                                Task List
                            </Modal.Title>
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
                            <ButtonToolbar>
                                <Button
                                    bsStyle="primary"
                                    bsSize="large"
                                    onClick={this.handleClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    bsStyle="success"
                                    bsSize="small"
                                    onClick={() =>
                                        this.editValue(
                                            this.state.key,
                                            this.newValue.value
                                        )}
                                >
                                    Save changes
                                </Button>
                            </ButtonToolbar>
                        </Modal.Footer>
                    </Modal>
                </Modalmod>
            </div>
        )
    }
}

export default ToDoItems
