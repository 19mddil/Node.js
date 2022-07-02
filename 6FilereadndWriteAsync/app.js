const fs = require('fs');
//import * as fs from 'fs'

fs.readFile('./files/input.txt', 'utf-8', (error, text) => {
    if (error) {
        console.log(error);
    } else {
        fs.writeFile('./files/output2.txt', text, (error, text) => {
            if (error) {
                console.log(error);
            } else {
                console.log("file successfully copied");
            }
        })
    }
});