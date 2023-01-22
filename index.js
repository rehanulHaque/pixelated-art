require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
app.use("/api", pixel)

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
})