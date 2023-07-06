import express from 'express'
import axios from 'axios'
const app=express()

// Middelwares

app.use(express.json())

const port=8000


// HTTP Requests
app.get('/',(req,res)=>{
    setInterval(async()=>{
        console.log('making req');
        axios.get('https://hm-server-2tgn.onrender.com/helper')
        console.log('made req');
        // axios.get('http://localhost:8080/helper')
    },120000)
    return res.status(201).json("Helper")
})


app.listen(port,()=>{
    console.log(`Server connected to http://localhost:${port}/`);
})
