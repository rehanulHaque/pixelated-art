const mongoose = require("mongoose")
const pixelSchema = mongoose.Schema({
    img: {
        type: Buffer
    }
})

module.exports = mongoose.model("Pixel", pixelSchema)