import React from "react"
import injectSheet from "react-jss"
import styles from "./SimpleModalLauncherStyles" // Import styles
import SimpleModal from "./SimpleModal" // Import SimpleModal component

// Declaration of the component as React Class Component
class SimpleModalLauncher extends React.Component {
    // Init of the component before it is mounted.
    // Sets the modal visibility (showModal) to false.
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    // Handle the visibility of the modal.
    // If `state.showModal` is false, sets it to true,
    // if is true, sets it to false.
    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const { sheet: { classes } } = this.props
        const { showModal } = this.state

        return (
            <div>
                <button
                    type="button"
                    className={classes.modalButton}
                    onClick={() => this.handleToggleModal()}
                >
                    Open Modal
                </button>

                {showModal && (
                    <SimpleModal
                        onCloseRequest={() => this.handleToggleModal()}
                    >
                        <img
                            src="https://placeimg.com/900/650/nature"
                            alt="Nature"
                        />
                    </SimpleModal>
                )}
            </div>
        )
    }
}

export default injectSheet(styles)(SimpleModalLauncher)
