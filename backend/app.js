const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const Error = require('./util/error');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.use((error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    res.status(statusCode).json(
        Error.Error('Something Went Wrong!', 'Something Went Wrong!', 0, "displayMessage")
    )
})

mongoose.connect("mongodb+srv://abhishek:cGWmXz90wfvFZItP@cluster0-rfd5b.mongodb.net/Test").then(connected => {
    console.log('DB Connected!');
    app.listen(8080);
    console.log('server listening to 8080');
}).catch(err => {
    console.log(err);
})
