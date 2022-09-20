const mongoose = require('mongoose');
const app = require('./app');

console.log(app.get('env'));

mongoose.connect('mongodb://localhost:27017/my-student-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(() => console.log("Connection to mongoDB successful"))
    .catch(err => console.log(err));


const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})