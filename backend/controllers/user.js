const mongoose = require('mongoose');
const Customer = require('../models/customer');
const Territory = require('../models/territory');
const Response = require('../util/response').Response;

exports.getCustomers = ((req, res, next) => {
    Customer.find().then(insertedData => {
        res.status(201).json(Response('Success', 'Successfully data retrived!', 1, 'GetCustomers_success', insertedData));
    }).catch(err => {
        err.statusCode = 500;
        next(err);
    })
});

exports.getTerritories = ((req, res, next) => {
    Territory.find().then(insertedData => {
        res.status(201).json(Response('Success', 'Successfully data retrived!', 1, 'GetTerritories_success', insertedData));
    }).catch(err => {
        err.statusCode = 500;
        next(err);
    })
})