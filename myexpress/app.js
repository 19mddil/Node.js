const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');

app.use(express.json());

app.use('/api/students', studentRouter);

app.get('/', (req, res) => {
    res.send("Hello from express");
});




const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

