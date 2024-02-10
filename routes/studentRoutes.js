const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send("Welcome, to StudentRoutes")
})

router.get("/courses/all", (req,res)=>{
    res.send({
        seccuss:true,
        status:200,
        message:"Student's Courses loaded successfully",
        courses: ['B.Tech','BCA','BBA','MCA','M.Tech']
    })
})

module.exports = router