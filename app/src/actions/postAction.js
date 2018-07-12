// import {
//     FETCH_TASKS_BEGIN,
//     FETCH_TASKS_SUCCESS,
//     FETCH_TASKS_FAILURE
// } from "./types"
// export const addTodo(input){
//   const text = input
//   const key = Date.now()
//
//   return dispatch => {
//     dispatch(addTask(text, key))
//   }
// }
// export function fetchTasks() {
//     return dispatch => {
//         dispatch(fetchTasksBegin())
//         return fetch("http://localhost:7000/tasks")
//             .then(handleErrors)
//             .then(res => res.json())
//             .then(data => {
//                 dispatch(fetchTasksSuccess(data.data))
//                 return data.data
//             })
//             .catch(error => dispatch(fetchTasksFailure(error)))
//     }
// }
//
// // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText)
//     }
//     return response
// }
