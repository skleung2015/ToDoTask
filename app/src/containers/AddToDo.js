import React from "react"

import { connect } from "react-redux"

import { addToDoRequest } from "../actions/types"

const AddTodo = props => {
    console.log(props)
    let input
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    props.addToDoRequest(input.value)
                    input.value = ""
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default connect(null, { addToDoRequest })(AddTodo)
