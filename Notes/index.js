const fs = require('fs');
fs.writeFileSync('./files/output.txt', fs.readFileSync('./files/input.txt', 'utf-8'));