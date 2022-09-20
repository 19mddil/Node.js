const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const morgan = require('morgan');
const authRouter = require('./routers/authRouter');



app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    console.log("development server");
    app.use(morgan('dev'));
}

app.use('/api/students', studentRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res, next) => {
    // res.send("Another response!");
    next();
})

app.get('/', (req, res) => {
    res.send("Hello from express");
});

module.exports = app;