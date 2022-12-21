# Mongodb server init

```bash
    sudo systemctl status mongod # to view if the server running or not
    sudo systemctl start mongod # to start the database server
    mongosh # to type mongodb squels.
```
# Maintanance

```bash
    sudo rm -rf /tmp/mongodb-27017.sock
    sudo service mongod start
    sudo chown -R mongodb:mongodb /var/lib/mongodb
    sudo chown mongodb:mongodb /tmp/mongodb-27017.socks

```
# Important Commands
## Show dbs
```bash
    testDB> show dbs
    admin           72.00 KiB
    config          72.00 KiB
    local           72.00 KiB
    my-student-DB  180.00 KiB
    my-test         72.00 KiB
    testDB          72.00 KiBs
```
## Inserting(Create)
```bash
    test> use testDB
    switched to db testDB
    testDB> db.students.insertOne({
    ... name: "Md.Dilshadul Islam",
    ... age: 25,
    ... hobbies: ["Drawing","Chess","Cycling"]
    ... })
    {
      acknowledged: true,
      insertedId: ObjectId("639f112b862585a3c4db7eb0")
    }
    testDB> db.students.find()
    [
      {
        _id: ObjectId("639f112b862585a3c4db7eb0"),
        name: 'Md.Dilshadul Islam',
        age: 25,
        hobbies: [ 'Drawing', 'Chess', 'Cycling' ]
      }
    ]
    testDB> db.students.insertMany([
    ... {
    ..... name: 'Jalal Hossain',
    ..... age: 45,
    ..... hobbies: ['Business Meeting','Venturing']
    ..... }
    ... ]
    ... )
    {
      acknowledged: true,
      insertedIds: { '0': ObjectId("63a2bc82b8fb27b8b41fd440") }
    }
    testDB> db.students.find()
    [
      {
        _id: ObjectId("639f112b862585a3c4db7eb0"),
        name: 'Md.Dilshadul Islam',
        age: 25,
        hobbies: [ 'Drawing', 'Chess', 'Cycling' ]
      },
      {
        _id: ObjectId("63a2bc82b8fb27b8b41fd440"),
        name: 'Jalal Hossain',
        age: 45,
        hobbies: [ 'Business Meeting', 'Venturing' ]
      }
    ]
```
## Read
```bash
  testDB> db.students.find().pretty()
  [
    {
      _id: ObjectId("639f112b862585a3c4db7eb0"),
      name: 'Md.Dilshadul Islam',
      age: 25,
      hobbies: [ 'Drawing', 'Chess', 'Cycling' ]
    },
    {
      _id: ObjectId("63a2bc82b8fb27b8b41fd440"),
      name: 'Jalal Hossain',
      age: 45,
      hobbies: [ 'Business Meeting', 'Venturing' ]
    }
  ]
  testDB> db.students.find({ name: "Jalal Hossain"})
  [
  {
    _id: ObjectId("63a2bc82b8fb27b8b41fd440"),
    name: 'Jalal Hossain',
    age: 45,
    hobbies: [ 'Business Meeting', 'Venturing' ]
  }
  ]
  testDB> db.students.find().limit(1)
  [
  {
    _id: ObjectId("639f112b862585a3c4db7eb0"),
    name: 'Md.Dilshadul Islam',
    age: 25,
    hobbies: [ 'Drawing', 'Chess', 'Cycling' ]
  }
  ]
  testDB> db.students.find({age:{$lte : 40}})
    [
      {
        _id: ObjectId("639f112b862585a3c4db7eb0"),
        name: 'Md.Dilshadul Islam',
        age: 25,
        hobbies: [ 'Drawing', 'Chess', 'Cycling' ]
      }
    ]
  testDB> db.students.find({age:{$gte : 40}})
    [
      {
        _id: ObjectId("63a2bc82b8fb27b8b41fd440"),
        name: 'Jalal Hossain',
        age: 45,
        hobbies: [ 'Business Meeting', 'Venturing' ]
      }
    ]
testDB> db.students.find({$or: [{age:{$lte : 40}},{age:{$gte : 40}}] })
    [
    {
      _id: ObjectId("639f112b862585a3c4db7eb0"),
      name: 'Md.Dilshadul Islam',
      age: 25,
      hobbies: [ 'Drawing', 'Chess', 'Cycling' ]
    },
    {
      _id: ObjectId("63a2bc82b8fb27b8b41fd440"),
      name: 'Jalal Hossain',
      age: 45,
      hobbies: [ 'Business Meeting', 'Venturing' ]
    }
    ]

```
