const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log('Database Connected Successfully'.white);
})


const port = (process.env.PORT) || 8000
app.listen(port, () => {
    console.log(`Server Running at ${port}`.blue)
})