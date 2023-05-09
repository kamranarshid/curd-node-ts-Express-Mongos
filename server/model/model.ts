import mongoose from 'mongoose';

const schemo = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    gender: String,
    status: String
});

const userDB = mongoose.model('userdb',schemo);
module.exports = userDB
