const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CakeSchema = new Schema({
    cakeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    // image: {
    //      type: String,
    //       required: true 
    //     }
}, { timestamps: true });

const CakeModel = mongoose.model('Cake', CakeSchema);
module.exports = CakeModel;