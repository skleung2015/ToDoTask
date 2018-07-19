export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS"
export const ADD_TO_DO = "ADD_TO_DO"
export const TO_DELETE = "TO_DELETE"
export const EDIT_TO_DO = "EDIT_TO_DO"
export const TO_AUTHENTICATE = "TO_AUTHENTICATE"

const fetchTasksSuccess = data => ({
    type: FETCH_TASKS_SUCCESS,
    payload: { data }
})

export const addToDoRequest = text => dispatch => {
    const key = Date.now()
    return fetch(`http://localhost:7000/addTask?task=${text}&identifier=${key}`)
        .then(() => {
            dispatch(addToDo(text, key))
        })
        .catch(error => console.log(error))
}

export const deleteRequest = key => dispatch => {
    fetch(`http://localhost:7000/deleteTask?identifier=${key}`)
        .then(() => {
            dispatch(deleteToDo(key))
        })
        .catch(error => console.log(error))
}
export const fetchTasks = () => dispatch =>
    fetch("http://localhost:7000/tasks")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchTasksSuccess(json.data))
        })
        .catch(error => console.log(error))

export const editRequest = (text, key) => dispatch =>
    fetch(`http://localhost:7000/editTask?task=${text}&identifier=${key}`)
        .then(() => {
            dispatch(editToDo(text, key))
        })
        .catch(error => console.log(error))

export const authenticate = (username, password) => dispatch =>
    fetch(
        `http://localhost:7000/authenticate?task=${username}&identifier=${password}`
    )
        .then(() => {
            dispatch(authenticateLogin(username, password))
        })
        .catch(error => console.log(error))

const addToDo = (text, key) => ({
    type: ADD_TO_DO,
    payload: { text, key }
})

const deleteToDo = key => ({
    type: TO_DELETE,
    payload: { key }
})

const editToDo = (text, key) => ({
    type: EDIT_TO_DO,
    payload: { text, key }
})

const authenticateLogin = (username, password) => ({
    type: TO_AUTHENTICATE,
    payload: { username, password }
})
