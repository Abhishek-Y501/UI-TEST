const express = require('express');
const userController = require('../controllers/user');

const routes = express.Router();

routes.get('/getCustomers', userController.getCustomers);
routes.get('/getTerritories', userController.getTerritories);


module.exports = routes;