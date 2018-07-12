import React from "react"
import { Button, ButtonToolbar, Modal } from "react-bootstrap"
// import "./index.css"
import styled from "styled-components"
import { connect } from "react-redux"

import { editRequest } from "../actions/types"

const Modalmod = styled.h1`
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin-top: 100px;
    padding: 2rem;
    position: relative;
`

class ModalWindow extends React.Component {
    // constructor(props) {
    // super(props)

    // const { dispatch } = props
    // this.boundActions = bindActionCreators(editRequest, dispatch)

    render() {
        console.log(this.props)
        console.log(this.props.keyValue)
        return (
            <div>
                <div>
                    <Modalmod style={{ height: 100 }}>
                        <Modal
                            show={this.props.show}
                            onHide={this.handleClose}
                            keyValue={this.props.keyValue}
                        >
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
                                        onClick={this.props.close}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        bsStyle="success"
                                        bsSize="small"
                                        onClick={() =>
                                            this.props.editRequest(
                                                this.newValue.value,
                                                this.props.keyValue
                                            )}
                                    >
                                        Save changes
                                    </Button>
                                </ButtonToolbar>
                            </Modal.Footer>
                        </Modal>
                    </Modalmod>
                </div>
            </div>
        )
    }
}

export default connect(null, { editRequest })(ModalWindow)
