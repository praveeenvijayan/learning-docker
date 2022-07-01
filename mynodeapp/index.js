const mongoose = require("mongoose");
const express  = require("express")

const app = express()
const DATABASE = "mongodb://mymongo:27017/testup"

mongoose.connect(DATABASE)
    .then(() => {
        console.log("DB connected!");
    })
    .catch(() => {
       console.log("Connection Failed!"); 
    })


app.get("/", (req, res) => {
    // res.send("<h1> Visiting Root </h1>")
    res.json({
        message: "you are visiting root"
    })
})


app.listen(8000, () => {
    console.log("App is running at 8000");
})



