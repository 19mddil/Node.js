# [Node](https://nodejs.org/docs/latest-v17.x/api/)
# Global Object
## Code
```js
    global.console.log("hello");
```
## Output
```bash
mddilshad@mddilshad-HP-ProBook-450-G5:~/Desktop/nodejs/Notes$ node index
hello
```

# Synchronus and Asynchronus process
## Synchronus
```js
    let text = fs.readFileSync('./files/input.txt', 'utf-8');
    console.log(text);
```
In the above code the second line doesn't execute until the line above it executes. This execution process is called synchoronus code.
## Asynchronus
```js
    fs.readFile('./files/input.txt', 'utf-8', (err, text) => {
        if (err) {
            console.log(err);
        }
        else {
            fs.writeFile('./files/output2.txt', text, 'utf-8', (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
    console.log('hello');
```
In the above code the last line doesn't wait for the fs.readfile. Whenever fs.readfile is successful a callback function is set to handle that process and this is called aynchronus process.

