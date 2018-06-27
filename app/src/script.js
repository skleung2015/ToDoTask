const express = require("express")

const mysql = require("mysql")

const cors = require("cors")

const app = express()

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dota_123456",
    database: "TaskList"
})
app.use(cors())
const SelectAllTasksQuery = "SELECT * FROM Tasks"

connection.connect(error => {
    if (error) {
        console.log("Error")
    } else {
        console.log("Connected")
    }
})

// app.get("/addTask", (req, resp) => {
//     const { task, identifier } = req.query
//     const InsertTask_Query =
//         "INSERT INTO Tasks (task, identifier) VALUES('${task}', '${identifier}')"
//
//     connection.query(InsertTask_Query, (error, rows, fields) => {
//         if (error) {
//             resp.send(error)
//         } else {
//             return resp.send("successfully added")
//         }
//     })
// })

app.get("/tasks", (req, resp) => {
    connection.query(SelectAllTasksQuery, (error, results) => {
        if (error) {
            return resp.send(error)
        }
        return resp.json({
            data: results
        })
    })
})

app.listen(7000)
