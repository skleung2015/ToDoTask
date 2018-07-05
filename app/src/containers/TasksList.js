import React from "react"
import { connect } from "react-redux"
// import { fetchTasks } from "../actions/postAction"

const { items } = this.props

const TasksList = ({ dispatch }) => (
    <ul>{items.map(item => <li key={item.key}>{item.name}</li>)}</ul>
)

const mapStateToProps = state => ({
    items: state.items.tasks
})
export default connect(mapStateToProps)(TasksList)
