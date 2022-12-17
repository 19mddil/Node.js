const express = require('express');
const app = express();
const morgan = require('morgan');
const studentRouter = require('./routers/studentRouter');

app.use(express.json()); //POST/PATCH/PUT -> json body -> req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.use('/api/students', studentRouter);

app.get('/', (req, res) => {
    res.send("Hi, this is the home page.");
})


const port = 3000;

app.listen(port, () => {
    console.log("Listening on 3000...")
})