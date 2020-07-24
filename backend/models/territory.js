const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const territorySchema = new Schema({
    list: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Territory', territorySchema);