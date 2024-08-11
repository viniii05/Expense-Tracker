const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = require('./routes/expenseRoutes');
app.use(userRouter);

sequelize.sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.error(err);
    });
