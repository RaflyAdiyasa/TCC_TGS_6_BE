import express from "express";
import cors from "cors";
import Route from "./routes/Route.js";
import userRouter from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";

import db from "./config/Database.js";
import User from "./model/UserModel.js";
import Note from "./model/NoteModel.js";

try {
    await db.authenticate();
    console.log('Database Connected...');
    await User.sync();
    await Note.sync();
    console.log('Table User and Note Created...');
} catch (error) {
    
}

const app = express();
const corsOptions = {
 origin: [
    'https://notes-fe-106-dot-a-07-451003.uc.r.appspot.com',
    "http://localhost:3000", 
  ], 
  credentials: true, 
};
app.use(cookieParser());
app.use(express.json());
app.use(Route);
app.use(userRouter);

app.listen(5000, ()=> console.log('Server up and running....'));