# MongoDB Mongosh Shell commands
## Inits
```
    > sudo systemctl start mongod
    > sudo systemctl status mongod
    > sudo lsof -iTCP -sTCP:sLISTEN | grep mongo
    > sudo systemctl stop mongod
    > mongosh
    > cls
```
## Create
```
    > show dbs
    > use my-test
    > db.students.insertOne({name: "Simanta Paul",age: 18,hobbies:["Chess","Fuck"]})
    > db.students.find()
    > db.stduents.insertMany([{ name : "Lara",age: 0,hobbile:["Jacking","Killing"]},{name:"You know who",age: 0,hobbie:["Pricking", "Poking"]}])
```
