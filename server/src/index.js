import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import {routes} from './routes/mainRoutes.js'

dotenv.config()

const app = express()
const port = 9090
app.use(express.json())
app.use(cors())

mongoose.connect('')
.then(()=>console.log("mogodb connected"))
.catch((err)=> console.log(err.massage))

app.use('/api',routes)

app.listen(port,()=>console.log(` server is runing port ${port}`))
