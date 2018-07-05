// const express = require("express")
//
// const mysql = require("mysql")
//
// const cors = require("cors")
//
// const app = express()
//
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Dota_123456",
//     database: "TaskList"
// })
// app.use(cors())
// const SelectAllTasksQuery = "SELECT * FROM Tasks"
//
// connection.connect(error => {
//     if (error) {
//         console.log("Error")
//     } else {
//         console.log("Connected")
//     }
// })
//
// app.get("/addTask", (req, resp) => {
//     const { task, identifier } = req.query
//     const InsertTaskQuery = `INSERT INTO Tasks (task, identifier) VALUES('${task}', '${identifier}')`
//
//     connection.query(InsertTaskQuery, (error, rows, fields) => {
//         if (error) {
//             resp.send(error)
//         } else {
//             return resp.send("successfully added")
//         }
//     })
// })
//
// app.get("/deleteTask", (req, resp) => {
//     const { identifier } = req.query
//     const InsertTaskQuery = `DELETE FROM Tasks WHERE (identifier = '${identifier}')`
//
//     connection.query(InsertTaskQuery, (error, rows, fields) => {
//         if (error) {
//             resp.send(error)
//         } else {
//             return resp.send("successfully deleted")
//         }
//     })
// })
//
// app.get("/tasks", (req, resp) => {
//     connection.query(SelectAllTasksQuery, (error, results) => {
//         if (error) {
//             return resp.send(error)
//         }
//         return resp.json({
//             data: results
//         })
//     })
// })
//
// app.get("/editTask", (req, resp) => {
//     const { task, identifier } = req.query
//
//     const InsertTaskQuery = `UPDATE Tasks SET task = '${task}'  WHERE (identifier = '${identifier}')`
//
//     connection.query(InsertTaskQuery, (error, rows, fields) => {
//         if (error) {
//             resp.send(error)
//         } else {
//             return resp.send("successfully edited")
//         }
//     })
// })
//
// app.listen(5000)
