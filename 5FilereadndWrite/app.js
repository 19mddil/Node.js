const fs = require('fs');
//import * as fs from 'fs'

let text = fs.readFileSync('./files/input.txt', 'utf-8');

text = `Copied text : ${text}`;

fs.writeFileSync('./files/output.txt', text);