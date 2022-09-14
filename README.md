# MongoDB Mongosh Shell commands
[install on ubntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

[crud operation doc](https://www.mongodb.com/docs/manual/crud/)

## [Install Compass](https://linuxways.net/ubuntu/how-to-install-mongodb-compass-in-ubuntu-20-04/)
```
    $ wget https://downloads.mongodb.com/compass/mongodb-compass_1.28.1_amd64.deb
    $ sudo apt install ./mongodb-compass_1.28.1_amd64.deb

```
## [Mongoose](https://mongoosejs.com/docs/guide.html)
```
    $ npm install mongoose
```
## [Mongoose-Validation](https://mongoosejs.com/docs/validation.html)
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
    my-test> db.students.insertOne({name: "Simanta Paul",age: 18,hobbies:["Chess","Fuck"]})
    my-test> db.stduents.insertMany([
        { name : "Lara",age: 0,hobbile:["Jacking","Killing"]},
        {name:"You know who",age: 0,hobbie:["Pricking", "Poking"]}
    ])
```
## Fetch
```
    my-test> db.students.find()
    my-test> db.students.find().pretty()
    my-test> db.students.find({ name : "Lara" }).pretty();
    my-test> db.students.find().limit(1)
    my-test> db.studnets.find({ age: {$lte: 18} })
    my-test> db.studnets.find({ age: {$lt: 18} })
    my-test> db.studnets.find({ age: {$gt: 18} })
    my-test> db.studnets.find({ age: {$gt: 18} }).pretty()
    my-test> db.students.find({ $or: [{ name: "Ada" },{ age : 25 }] })
```
### Update
```
    > db.students.updateOne({age : 9},{ $set : {hobbie : ['coding']} })
    > db.students.updateOne({age : 9},{ $set : {name : 'Ada Byren',hobbie :     ['coding','piano']} })
```
### Delete
```
    > db.students.deleteOne({ age: 25 })
```