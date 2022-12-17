const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');

app.use(express.json());
app.use('/api/students', studentRouter);

app.get('/', (req, res) => {
    res.send("Hi, this is the home page.");
})


const port = 3000;

app.listen(port, () => {
    console.log("Listening on 3000...")
})