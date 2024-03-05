const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
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
    expenses: [expenseSchema],
}, {
    timestamps: true,
});

budgetSchema.virtual('budgetLeft').get(function() {
    return this.expenses.reduce((total, expense) => {total += expense.cost}, 0);
});

module.exports = mongoose.model('Budget', budgetSchema);