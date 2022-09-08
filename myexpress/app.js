const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log("I am middleware 1");
    next();
})
app.use((req, res, next) => {
    console.log("I am middleware 2");
    next();
});
app.use('/api/students', studentRouter);

app.get('/', (req, res, next) => {
    // res.send("Another response!");
    next();
})


app.get('/', (req, res) => {
    console.log("I am get request middleware");
    res.send("Hello from express");
});




const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

