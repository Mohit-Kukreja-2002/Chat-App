import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';
import connectDb from './db/connectDb.js';

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config()

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter)
app.use("/api/messages",messageRouter)
app.use("/api/users",userRouter)

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })


app.listen(PORT,()=>{
    connectDb();
    console.log(`listening on ${PORT}`);
})