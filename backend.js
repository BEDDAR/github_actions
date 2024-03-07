const express =require('express')
const port =5012

const app=express()

app.get('/', (req, res) => {
    res.send("GET Request Called")
    })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})