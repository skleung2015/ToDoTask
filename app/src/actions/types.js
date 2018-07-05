export const FETCH_TASKS_BEGIN = "FETCH_TASKS_BEGIN"
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS"
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE"
export const ADD_TO_DO = "ADD_TO_DO"

export const fetchTasksBegin = () => ({
    type: FETCH_TASKS_BEGIN
})

export const fetchTasksSuccess = data => ({
    type: FETCH_TASKS_SUCCESS,
    payload: { data }
})

export const fetchTasksError = error => ({
    type: FETCH_TASKS_FAILURE,
    payload: { error }
})

export const addToDoRequest = text => dispatch => {
    const key = Date.now()
    return fetch(`http://localhost:7000/addTask?task=${text}&identifier=${key}`)
        .then(() => {
            dispatch(addToDo(text, key))
        })
        .catch(error => console.log(error))
}

const addToDo = (text, key) => ({
    type: ADD_TO_DO,
    payload: { text, key }
})
