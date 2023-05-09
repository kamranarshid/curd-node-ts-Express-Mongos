"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const connectDB = require('./server/database/connection');
dotenv_1.default.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
//log request
app.use((0, morgan_1.default)('tiny'));
//DB Connection
connectDB();
/// load assets
const filesPath = __dirname.replace('/compiledFiles', '');
app.use(express_1.default.static(filesPath + '/assets'));
//parse request to body parser
app.use(body_parser_1.default.urlencoded({ extended: true }));
//set view engine
app.set("views", path_1.default.resolve(process.env.viewPath ? process.env.viewPath : '', "./views"));
app.set("view engine", "ejs");
//Load Router
app.use('/', require('./server/routes/router'));
app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });
