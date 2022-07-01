const express  = require("express")
const app = express()


app.get("/", (req, res) => {
    // res.send("<h1> Visiting Root </h1>")
    res.json({
        message: "you are visiting root"
    })
})


app.get("/login", (req, res) => {
    // res.send("<h1> Visiting Root </h1>")
    res.json({
        message: "you are login root"
    })
})


app.get("/signup", (req, res) => {
    // res.send("<h1> Visiting Root </h1>")
    res.json({
        message: "you are signup root"
    })
})

app.get("/logout", (req, res) => {
    // res.send("<h1> Visiting Root </h1>")
    res.json({
        message: "you are successfully logged out"
    })
})


app.listen(8000, () => {
    console.log("App is running at 8000");
})
