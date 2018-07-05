import {
    FETCH_TASKS_BEGIN,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TO_DO
} from "../actions/types"

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TASKS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state
            }

        case FETCH_TASKS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return action.payload.data.forEach(item => {
                const newItem = {
                    text: item.Task,
                    key: item.Identifier
                }
                state.setState(prevState => ({
                    tasks: prevState.tasks.concat(newItem)
                }))
            })

        case FETCH_TASKS_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                tasks: []
            }

        case ADD_TO_DO:
            const text = this.inputElement.value
            const key = Date.now()

            fetch(
                `http://localhost:7000/addTask?task=${text}&identifier=${key}`
            )
                .then(() => {
                    const newTask = {
                        text,
                        key
                    }
                    this.setState(prevState => ({
                        tasks: prevState.tasks.concat(newTask)
                    }))
                })
                .catch(error => this.setState({ error, isLoading: false }))
            this.inputElement.value = ""
            console.log(this.state.tasks)
            return state

        default:
            // ALWAYS have a default case in a reducer
            return state
    }
}
