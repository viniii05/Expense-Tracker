const express = require('express');
const router = express.Router();
const expenseController = require('../controller/ExpenseController');

router.get('/', expenseController.getExpense);

router.get('/api/users', expenseController.getAllExpenses);

router.post('/api/users', expenseController.postExpense);

router.put('/api/users/:id', expenseController.updateExpense); 
 
router.delete('/api/users/:id', expenseController.deleteExpense); 

module.exports = router;
