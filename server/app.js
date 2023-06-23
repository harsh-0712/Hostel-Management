import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connect from './database/connection.js'
import route from './router/route.js'
import UserModel from './model/userModel.js'

const app=express()

// Middelwares

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by') 

const port=8080


// HTTP Requests
app.get('/',async(req,res)=>{
    console.log('hello');
    const task=await UserModel.create({hallName:'KMSHall',userList:[]})
    res.status(201).json('Home Get Requests')
})


// api routes
app.use('/api',route);





// // Start Server only when we have valid connection
connect().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server connected to http://localhost:${port}/`);
        })
    } catch (error) {
        console.log('Cannot connect to server');
    }
}).catch((error)=>{
    console.log('Invalid database connect');
})
