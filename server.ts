import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyparser from "body-parser";
import path from 'path';


const connectDB = require('./server/database/connection');

dotenv.config({ path: 'config.env' })


const PORT = process.env.PORT || 8080;


const app = express();

//log request
app.use(morgan('tiny'));

//DB Connection
connectDB();

/// load assets
const filesPath: any = __dirname.replace('/compiledFiles','');
app.use(express.static(filesPath+ '/assets'));

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("views", path.resolve(process.env.viewPath ? process.env.viewPath : '', "./views"));

app.set("view engine", "ejs");

//Load Router
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });


