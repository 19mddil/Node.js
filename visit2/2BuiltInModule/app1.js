const fs = require('fs');
fs.readFile('files/input.txt', 'utf-8', (err, text) => {
    if (err) {
        console.log(err);
        return;
    }
    fs.writeFile('files/output2.txt', text, 'utf-8', (err) => {
        console.log(err);
    })

})