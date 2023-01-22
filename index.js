require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require("mongoose")
const pixel = require("./router/pixel")
app.set("view engine", 'ejs')
app.use("/api", pixel)


mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL).then((result) => {
    console.log("Connect Database")
    app.listen(PORT, ()=> console.log("Running"))
}).catch((err) => {
    consolse.log("error connecting database")
})