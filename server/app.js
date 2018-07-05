const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const mysql = require("mysql")

const cors = require("cors")

const app = express()

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Dota_123456",
    database: "TaskList"
})

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 7000

// Serve static assets
app.use(express.static(path.join(__dirname, "..", "dist")))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: "100mb" }))

app.use(cors())

const SelectAllTasksQuery = "SELECT * FROM Tasks"

connection.connect(error => {
    if (error) {
        console.log("Error")
    } else {
        console.log("Connected")
    }
})

app.get("/addTask", (req, resp) => {
    const { task, identifier } = req.query
    const InsertTaskQuery = `INSERT INTO Tasks (task, identifier) VALUES('${task}', '${identifier}')`

    connection.query(InsertTaskQuery, (error, rows, fields) => {
        if (error) {
            return resp.send(error)
        }
        return resp.send("successfully added")
    })
})

app.get("/deleteTask", (req, resp) => {
    const { identifier } = req.query
    const InsertTaskQuery = `DELETE FROM Tasks WHERE (identifier = '${identifier}')`

    connection.query(InsertTaskQuery, (error, rows, fields) => {
        if (error) {
            return resp.send(error)
        }
        return resp.send("successfully deleted")
    })
})

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

app.get("/editTask", (req, resp) => {
    const { task, identifier } = req.query

    const InsertTaskQuery = `UPDATE Tasks SET task = '${task}'  WHERE (identifier = '${identifier}')`

    connection.query(InsertTaskQuery, (error, rows, fields) => {
        if (error) {
            return resp.send(error)
        }
        return resp.send("successfully edited")
    })
})

// reroute all frontend routes to be handled by react-router
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})
