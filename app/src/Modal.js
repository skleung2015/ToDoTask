import React from "react"
import "./index.css"

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.editValue = this.editValue.bind(this)
    }

    editValue(originalKey, newValue) {
        console.log(originalKey)
        console.log(newValue)
        this.props.editValue(originalKey, newValue)
    }
    render() {
        const backdropStyle = {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: 50
        }

        const modalStyle = {
            backgroundColor: "#fff",
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: "0 auto",
            position: "relative"
        }

        // const FormGroup = ReactBootstrap.FormGroup
        // const FormControl = ReactBootstrap.FormControl
        // const originalKey = this.props.keyValue
        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    <div>
                        Task:
                        <input type="text" ref={a => (this.newValue = a)} />
                        <button
                            onClick={() =>
                                this.editValue(
                                    this.props.keyValue,
                                    this.newValue
                                )}
                        >
                            Add
                        </button>
                    </div>

                    <div className="modalButton">
                        <button onClick={this.props.close}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
