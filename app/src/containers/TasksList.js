import React from "react"
import { connect } from "react-redux"
// import { fetchTasks } from "../actions/postAction"

const TasksList = props => (
    <ul>{props.items.map(item => <li key={item.key}>{item.text}</li>)}</ul>
)

const mapStateToProps = state => ({
    items: state.items.tasks
})
export default connect(mapStateToProps)(TasksList)
