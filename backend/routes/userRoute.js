import express from 'express'
import{registerUser,loginUser} from '../controllers/userController.js'

const userRoute=express.Router()

userRoute.post('/register',registerUser)
userRoute.post('/login',loginUser)



export default userRoute