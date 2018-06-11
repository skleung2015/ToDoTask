import React from "react"
import "./index.css"

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.edit = this.edit.bind(this)
    }

    edit(originalKey, newValue) {
        this.props.edit(originalKey, newValue)
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
        console.log(this.props.keyValue)
        console.log(this.newKey)
        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    <div>
                        <form onSubmit={this.edit}>
                            Task:
                            <input type="text" ref={a => (this.newKey = a)} />
                            <button type="submit" onClick={this.props.close}>
                                Add
                            </button>
                        </form>
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
