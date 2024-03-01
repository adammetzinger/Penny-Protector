const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    }
}, {
    timestamps: true
});

const budgetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    expences: [expenceSchema],
}, {
    timestamps: true,
});



module.exports = mongoose.model('Budget', budgetSchema);