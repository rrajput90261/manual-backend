import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import {routes} from './routes/mainRoutes.js'
import { rateLimit } from 'express-rate-limit'
dotenv.config()

const app = express()
const port = 9090
app.use(express.json())
app.use(cors())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-8', 
	legacyHeaders: false, 
	ipv6Subnet: 56, 
	
})

app.use(limiter)


mongoose.connect(process.env.Atlast_URl)
.then(()=>console.log("mogodb connected"))
.catch((err)=> console.log(err.massage))

app.use('/api',routes)

app.listen(port,()=>console.log(` server is runing port ${port}`))
