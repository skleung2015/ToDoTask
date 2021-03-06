import React from "react"
import { connect } from "react-redux"

import Login from "../containers/Login"
import { fetchTasks } from "../actions/types"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)

        this.state = {
            showModal: false,
            key: null
        }
    }

    componentDidMount() {
        this.props.fetchTasks()
    }

    handleClose() {
        this.setState({ showModal: false })
    }

    handleShow(key) {
        this.setState({ showModal: true, key })
    }

    render() {
        console.log(this.state.key)
        return (
            <Login />

            // <div>
            //     <AddTodo />
            //     <TasksList
            //         modalClose={this.handleClose}
            //         modalOpen={this.handleShow}
            //     />
            //     <ModalWindow
            //         keyValue={this.state.key}
            //         show={this.state.showModal}
            //         close={this.handleClose}
            //     />
            // </div>
        )
    }
}

export default connect(null, { fetchTasks })(App)
