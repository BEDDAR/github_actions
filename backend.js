const express =require('express')
const port =5012

const app=express()

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})