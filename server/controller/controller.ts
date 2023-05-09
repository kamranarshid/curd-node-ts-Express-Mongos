const userDB = require('../model/model');

//create and save User
exports.create = (req: any, res: any) => {
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
    })
    //save
    user
        .save(user)
        .then((data: any) => {
            res.send(data)
        })
        .catch((err: { message: any; }) => {
            res.status(500).send({ message: err.message || "Some issue in saving data" });
        });
}

//Retrive and return users
exports.find = (req: any, res: any) => {
    userDB.find()
        .then((user: any) => {
            res.send(user)
        })
        .catch((err: { message: any; }) => {
            res.status(500).send({ message: err.message || "Some issue in retriving data" });
        });

}

//Update User via user ID
exports.update = (req: any, res: any) => {

}

//create and save User
exports.delete = (req: any, res: any) => {

}