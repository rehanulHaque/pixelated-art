const router = require("express").Router()
const multer = require("multer");
const sharp = require("sharp")

//  Models
const Pixel = require("../model/pixel");

//  Multer Configuration
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('please upload an image'))
        }
        cb(undefined, true)
    }
})


router.get("/", async(req, res)=>{
    const images = await Pixel.find({})
    // res.send(images[0].img)
    res.render("index", {image: images[0]})
})

router.post("/", upload.single("img"), async(req, res)=>{
    const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
    const img = await Pixel.create({
        img: buffer
    })
    res.send("done")
})

module.exports = router