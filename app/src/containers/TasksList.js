import React from "react"
import { connect } from "react-redux"
import { fetchTasks, deleteRequest } from "../actions/types"

const TasksList = props => (
    <div>
        <ul>
            {props.items.map(item => (
                <li key={item.key}>
                    {item.text}
                    <button onClick={() => props.modalOpen(item.key)}>
                        Edit
                    </button>
                    <button onClick={() => props.deleteRequest(item.key)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>
)

const mapStateToProps = state => ({
    items: state.items.tasks
})
export default connect(mapStateToProps, {
    fetchTasks,
    deleteRequest
})(TasksList)
