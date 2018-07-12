import {
    FETCH_TASKS_SUCCESS,
    ADD_TO_DO,
    TO_DELETE,
    EDIT_TO_DO
} from "../actions/types"

const initialState = {
    tasks: []
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TASKS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            console.log(action.payload)
            const tasks = action.payload.data.map(item => {
                const newItem = {
                    text: item.Task,
                    key: item.Identifier
                }
                return newItem
                // state.setState(prevState => ({
                //     tasks: prevState.tasks.concat(newItem)
                // }))
            })

            return {
                tasks: [...state.tasks, ...tasks]
            }

        case ADD_TO_DO:
            return {
                tasks: [...state.tasks, action.payload]
            }

        case TO_DELETE:
            console.log(action.payload)
            const filteredItems = state.tasks.filter(
                item => item.key !== action.payload.key
            )
            return {
                tasks: filteredItems
            }

        case EDIT_TO_DO:
            const filterItems = state.tasks.filter(
                item => item.key !== action.payload.key
            )

            return {
                tasks: [...filterItems, action.payload]
            }

        default:
            // ALWAYS have a default case in a reducer
            return state
    }
}
