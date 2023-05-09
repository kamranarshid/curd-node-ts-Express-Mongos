"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Root Route
 * @method get /home
 */
route.get("/", services.homeRoutes);
/**
 * @description Root Route
 * @method get /add user
 */
route.get("/add_user", services.addUser);
/**
 * @description Root Route
 * @method get update
 */
route.get("/update_user", services.updateUser);
//API 
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
module.exports = route;
