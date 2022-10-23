const express = require("express") //Express Module
const cors = require("cors") //Cors Module
const app = express(); //Express functionalities

//Server Config

app.set("port", process.env.PORT || 4000) //Define our port as host's port, or 4000 for debug.


//Middleware for before routes
app.use(cors()) //Allows server requests to our API
app.use(express.json())

//Routes
app.get("/", (req, res) => {
    res.send("welcome");
})

//API route
app.use("/api/users", require("./routes/user"))

module.exports = app; //Export our app