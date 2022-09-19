const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const morgan = require('morgan');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');

mongoose.connect('mongodb://localhost:27017/my-student-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(() => console.log("Connection to mongoDB successful"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(morgan('dev'));

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

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
