const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    list: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Customer', customerSchema);