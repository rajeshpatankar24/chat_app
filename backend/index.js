import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './src/routes/auth.route.js'
import messageRoutes from './src/routes/message.route.js'

import { connectDB } from './src/lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)

const PORT = process.env.PORT

app.listen(PORT,()=>{
 console.log("server is runing on port 5001");
 connectDB()
})
