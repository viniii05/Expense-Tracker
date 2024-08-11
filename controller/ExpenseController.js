const Expense = require('../models/expenseModel');
const path = require('path');
const rootDir = require('../util/path');

exports.getExpense = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
}

exports.postExpense = (req, res, next) => {
    const { amount, description, category } = req.body;

    Expense.create({ amount, description, category })
        .then(() => res.status(201).json())
        .catch(err => {
            console.error(err);
        });
}

exports.getAllExpenses = (req, res, next) => {
    Expense.findAll()
        .then(expenses => res.json(expenses))
        .catch(err => {
            console.error( err);
        });
}

exports.updateExpense = (req, res, next) => {
    const id = req.params.id;
    const { amount, description, category } = req.body;

    Expense.findById(id)
        .then(expense => {
            if (expense) {
                expense.amount = amount;
                expense.description = description;
                expense.category = category;
                return expense.save();
            } else {
                res.status(404).json();
            }
        })
        .then(() => res.status(200).json())
        .catch(err => {
            console.error(err);
        });
}

exports.deleteExpense = (req, res, next) => {
    const id = req.params.id;

    Expense.findById(id)
        .then(expense => {
            if (expense) {
                return expense.destroy();
            } else {
                res.status(404).json();
            }
        })
        .then(() => res.status(200).json())
        .catch(err => {
            console.error( err);
        });
}
