"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await (0, mongoose_1.connect)(process.env.mongoDB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true
        });
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;
