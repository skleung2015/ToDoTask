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

export const addToDo = text => ({
    type: ADD_TO_DO,
    payload: { text }
})
