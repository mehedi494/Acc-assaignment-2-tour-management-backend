const express = require('express');
const app = express();
const cors = require('cors');
const Router = require("./routes/v1/tour.routes")
// const Routes =


// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Routes Are Working")
})

app.use("/api/v1/tours", Router)
app.use("/api/v1/tour", Router)

app.use("/", (req, res) => {
    res.status(404).send("No route found")
})

module.exports = app