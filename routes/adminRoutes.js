const router = require('express').Router()

router.get('/', (req,res)=>{
    res.send("Welcome, to AdminRoutes")
})

router.get('/courses/all', (req,res)=>{
    res.send({
        success:true,
        status:200,
        message:"All courses loaded successfully"
    })
})

module.exports = router