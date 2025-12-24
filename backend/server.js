import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRoute from './routes/userRoute.js'
import connectDB from './config/mongodb.js'
import chatRouter from './routes/chatRoute.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

const app=express()
const port=process.env.PORT || 4000

connectDB();

connectCloudinary();

app.use(express.json())
app.use(cors())

app.use('/api/admin',adminRouter)
app.use('/api/user',userRoute)
app.use('/api/chat',chatRouter)

app.get('/',(req,res)=>{
    res.send('Server is running OK!!!')
})

app.listen(port,()=> console.log("Server Started on",port))
