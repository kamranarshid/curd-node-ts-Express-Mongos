"use strict";
const userDB = require('../model/model');
//create and save User
exports.create = (req, res) => {
    //validate
    if (!req.body) {
        res.status(400).send({ message: "COntent can not be empty" });
        return;
    }
    //new user
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });
    //save
    user
        .save(user)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({ message: err.message || "Some issue in saving data" });
    });
};
//Retrive and return users
exports.find = (req, res) => {
    userDB.find()
        .then((user) => {
        res.send(user);
    })
        .catch((err) => {
        res.status(500).send({ message: err.message || "Some issue in retriving data" });
    });
};
//Update User via user ID
exports.update = (req, res) => {
};
//create and save User
exports.delete = (req, res) => {
};
