require("dotenv").config()
const express = require("express")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000

const random = () =>{
    return Math.floor(Math.random() * 14  + 1)
}


app.get("/api", async(req, res)=>{
    res.sendFile(path.join(__dirname + `/arts/${random()}.jpg`))
})

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
})