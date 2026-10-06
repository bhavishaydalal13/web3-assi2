import express from 'express';
import { loggermiddleware } from './middleware/logger.js';
const app = express()
app.use(express.json())
import router from './routes/userroutes.js';

app.use(loggermiddleware)

app.use(router)
const port = 3000
app.listen(port,()=>{
    console.log('server started at port : ',port)
})