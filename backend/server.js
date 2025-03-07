import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
import connectDB from './config/mongodb.js'
import chatRouter from './routes/chatRoute.js'

const app=express()
const port=process.env.PORT || 4000
connectDB();

app.use(express.json())
app.use(cors())
app.use('/api/user',userRoute)
app.use('/api/chat',chatRouter)

app.get('/',(req,res)=>{
    res.send('Server is running great')
})

app.listen(port,()=> console.log("Server Started on",port))
