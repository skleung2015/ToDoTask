import React from "react"

import { connect } from "react-redux"

import { authenticate } from "../actions/types"
import "./Login.css"
import TextInput from "./TextInput"
import Button from "./Button"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    usernameChangeHandler(event) {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    passwordChangeHandler(event) {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <br />
                    <TextInput
                        className="bx--text__item"
                        id="username"
                        labelText="Username"
                        onChange={this.usernameChangeHandler}
                        placeholder="Please enter your username"
                        type="text"
                    />
                </div>

                <div>
                    <TextInput
                        className="bx--text__item"
                        id="password"
                        labelText="Password"
                        onChange={this.passwordChangeHandler}
                        placeholder="Please enter your password"
                        type="password"
                    />
                </div>

                <div>
                    <Button
                        className="bx--btn--danger--primary"
                        kind="danger--primary"
                        onClick={() =>
                            this.props.authenticate(
                                this.state.username,
                                this.state.password
                            )}
                    >
                        Sign-In
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(null, { authenticate })(Login)
