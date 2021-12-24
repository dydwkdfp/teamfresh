const express = require('express')
const app = express()
const cors = require('cors')
const axdata = require('./axdata.js')

app.use(cors())

app.get('/Delivery/:city', async(req,res)=> {
    const city=decodeURIComponent(req.params.city)
    await axdata(encodeURIComponent(city) ,(error, {posibility}={})=> {
            if(error){
                res.send(error)
            }
            res.send(posibility)
    })

})

app.listen(8000, ()=> {
    console.log("server is running at port 8000")
})