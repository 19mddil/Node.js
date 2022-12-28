const express = require('express');
const app = express();
const morgan = require('morgan');
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const { connectDB } = require('./db');
const mongoose = require('mongoose');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));


app.use('/api/students', studentRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send("Hi, this is the home page.");
})


const port = 3000;

app.listen(port, () => {
    console.log("Listening on 3000...")
})