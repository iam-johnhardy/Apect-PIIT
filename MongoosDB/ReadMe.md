> For the complete MongoDB documentation index, see www.mongodb.com/docs/llms.txt
npm init -y
npm install mongodb
# Run Commands

To run commands in `mongosh`, you must first [connect to a MongoDB deployment.](/docs/mongodb-shell/connect#std-label-mdb-shell-connect)

## Format Input and Output

`mongosh` uses the [Node.js BSON parser](https://www.npmjs.com/package/bson) parser to parse [BSON](https://www.mongodb.com/basics/bson) data. You can use the parser's [EJSON](https://www.npmjs.com/package/bson#EJSON) interface to transform your data when you work with `mongosh`.

For examples that use EJSON, see: [EJSON.](/docs/mongodb-shell/reference/ejson#std-label-mongosh-ejson)

## Switch Databases

To display the database you are using, type `db`:

```sh
db
```

The operation should return `test`, which is the default database.

To switch databases, issue the `use <db>` helper, as in the following example:

```javascript
use <database>
```

To access a different database from the current database without switching your current database context, see the [`db.getSiblingDB()`](https://www.mongodb.com/docs/manual/reference/method/db.getSiblingDB/#mongodb-method-db.getSiblingDB) method.

To list the databases available to the user, use the helper `show
dbs`.

### Create a New Database and Collection

To create a new database, issue the `use <db>` command with the database that you would like to create. For example, the following commands create both the database `myNewDatabase` and the [collection](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-collection) `myCollection` using the [`insertOne()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/#mongodb-method-db.collection.insertOne) operation:

```javascript
use myNewDatabase
db.myCollection.insertOne( { x: 1 } );
```

If a collection does not exist, MongoDB creates the collection when you first store data for that collection.

## Terminate a Running Command

To terminate a running command or query in [`mongosh`](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh), press `Ctrl + C`.

When you enter `Ctrl + C`, [`mongosh`:](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh)

- interrupts the active command,

- tries to terminate the ongoing, server-side operation, and

- returns a command prompt.

If [`mongosh`](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh) cannot cleanly terminate the running process, it issues a warning.

**Note:**

Pressing `Ctrl + C` in [`mongosh`](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh) does not terminate asynchronous code. Asynchronous operations such as `setTimeout` or operations like `fs.readFile` continue to run.

There is no way to terminate asynchronous code in [`mongosh`](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh). This is the same behavior as in the Node.js [REPL.](https://nodejs.org/api/repl.html)

Pressing `Ctrl + C` once will not exit [`mongosh`](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh), press `Ctrl + C` twice to  exit [`mongosh`.](/docs/mongodb-shell/index#mongodb-binary-bin.mongosh)

You can also terminate a script from within the script code by calling the `exit(<code>)` command. For more information, refer to [Terminate a Script on Error.](/docs/mongodb-shell/write-scripts#std-label-mongosh-terminate-script)

## Command Exceptions

For commands whose output includes `{ ok: 0 }`, `mongosh` returns a consistent exception and omits the server raw output. The legacy `mongo` shell returns output that varies for each command.

## Clear the `mongosh` Console

The `cls` command clears the console. You can also clear the console with `Ctrl + L` and `console.clear()`.

## show dbs --- to show your dbs

## to an exising db ---- use the db name then --- show collections

## to delete a db --- current db.dropDatabase()

## cls --- to clear screen

## exit --- to exit a db

## use db name --- automaticaly create a db


## db ---- to access your current db

## db.table --  table(can be any name) is a collections, you have to create a table before you can add a {} or []

## show collections -- to show any collections/table in your db, also a collections must have an {} inside

## db.users.insertOne({ }) --- to insert just 1 object, must start {}

##  db.users.insertOne({ name: "Sally", age : 19, address : { street : "344 Northside str" }, hobbies: ["Running", "Music"] }) --- to add a nested obj and array

## db.users.insertMany({ }) --- to insert just many object, but start with an array []

## db.users.find() --- to find() get everything inside the database, also

## note!!! every single object you store in a db is called a DOCUMENT and document leaves in COLLECTION an leaves in a db


## blog> db.table.find().limit(2) --- limit obj to only 2

## db.table.find().sort({ name:1}) --- sort only obj names, can also be limit()

## db.datas.find().sort({year:1, name :1}).limit(5) -- sort by year and name.also a limit of 5 object.

##  db.datas.find({ name:'Maggie Block'}) -- you can find an obj with a name

##  db.datas.find({ id:'5'}) -- you can find an obj with a number

## db.datas.find({ name : 'Maggie Block'},{ name: 1, age: 1}) -- search by name to return only the wanted objects{}

## db.datas.find({ name : 'Maggie Block'},{ name: 1, age: 1, _id: 0}) -- can set any value to 0, if don't want them to return/show

## db.posts.find({}, {title: 1, date: 1}) -- 

## There are many query operators that can be used to compare and reference document fields.

## Comparison
## The following operators can be used in queries to compare values:

## $eq: Values are equal
## db.products.find({ name: { $eq: "Laptop" } })
## //or simply: db.products.find({ name: "Laptop" })
## $ne: Values are not equal
## // db.products.find({ name: { $ne: "Laptop" } })   // all products except Laptop
## $gt: Value is greater than another value
## // db.products.find({ price: { $gt: 50 } })   // price above 50 (Mouse, Keyboard excluded... wait, Mouse=25, Keyboard=75, Laptop=999 → Keyboard & Laptop)
## $gte: Value is greater than or equal to another value
## // db.products.find({ price: { $gte: 75 } })   // 75 and above
## $lt: Value is less than another value
## // db.products.find({ price: { $lt: 100 } })   // Mouse(25), Keyboard(75)
## $lte: Value is less than or equal to another value
## // db.products.find({ price: { $lte: 75 } })
## $in: Value is matched within an array
## // db.products.find({ price: { $in: [25, 75] } })   // Mouse & Keyboard


## Logical
## The following operators can logically compare multiple queries.

## $and: Returns documents where both queries match
## // db.products.find({ $and: [ { price: { $gte: 50 } }, { inStock: true } ] })
## $or: Returns documents where either query matches
## // db.products.find({ $or: [ { id: { $gt: 12 } }, { name: 'Tracy Beier' } ] }) // Laptop (999) and Keyboard (not in stock)
## $nor: Returns documents where both queries fail to match
## // db.products.find({ $nor: [ { price: { $gt: 500 } }, { inStock: false } ] }) // Only Mouse (not expensive AND in stock)
## $not: Returns documents where the query does not match
## // db.products.find({ price: { $not: { $gt: 100 } } }) // prices NOT greater than 100 → Mouse(25), Keyboard(75)
## // Note: $not applies to a single field's condition

## Evaluation
## The following operators assist in evaluating documents.

## $regex: Allows the use of regular expressions when evaluating field values
## // db.products.find({ name: { $regex: "^K" } })   // names starting with K → Keyboard
## // db.products.find({ name: { $regex: "top$" } }) // names ending with "top" → Laptop
## $text: Performs a text search
## // db.products.find({ $where: "this.price > 50" })
## // equivalent to: db.products.find({ price: { $gt: 50 } }) but in JS
## // You can do fancy logic:
## //db.products.find({ $where: "this.name.length > 5" })  // names longer than 5 chars


## The deleteOne()/deleteMany() method will delete the first document that matches the query provided.
## // db.posts.deleteOne( { _id: ObjectId('6aaa7be541036b658c0a03f2')} )
## // db.posts.deleteMany({  name: 'Diana'})
## // db.sales.updateMany( {},{ $unset: { toatal: "" } } )


## The updateOne() method will update the first document that is found matching the provided query.
## // db.students.updateOne( { name: 'Eve' }, { $set: { grade: 'F'} } )
## Update the document, but if not found insert it upsert():
## // db.students.updateOne( { name: 'John Hardy' }, { $set: { grade: 'F', city:'Lagos',subjects: ['software developer'], age: 37, date: Date()} }, { upsert:true } )
## The updateMany() method will update all documents that match the provided query.
## // db.posts.updateMany({}, { $inc: { age: 1 } })
## // db.posts.updateMany({}, { $inc: { age: -1 } }) // decrement


# field operations
## // db.students.updateMany( { "grade": { $exists: true } },{ $rename: { "grade": "yearLevel" } } )
## // db.students.updateMany( {},{ $unset: { "city": "" } })

## Arrary operations 
## // db.students.updateMany({ _id: ObjectId('6aaa7be541036b658c0a03f5') },{ $push: { city: "Lagos" } }) // add one element
## db.students.updateMany({ _id: ObjectId('6aaa7be541036b658c0a03f5') },{ $pop: { city: "Lagos" }}    // 1  → remove the LAST element) // remove element

## Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.
## // db.classes.aggregate([{ $match: { product: 'pizza' } },{ $group: { _id: '$customerName', total: { $sum: '$total' } } }])// select, group and add numeric value  // can also add in the middle of your query { $unwind: '$total' }, // Flatten the array into a regular number
## // db.classes.aggregate([{ $match: { product: 'pizza' } },{ $unwind: '$total' }, // Flatten the array into a regular number{ $group: { _id: '$customerName', total: { $sum: '$total' } } }])
## // db.classes.aggregate([{ $match: { product: 'pizza' } },{ $unwind: '$total' }, { $match: { total: { $gt: 0 } } }, // Keeps only numbers greater than 0{ $group: { _id: '$customerName', total: { $sum: '$total' } } }]) // To filter negative number
## // db.classes.aggregate( [ { $project: {_id: 1, customer:1,product:1} }]) //Include/exclude/reshape fields
## // db.classes.aggregate([{ $match: { total: { $gt: 10 } } },{ $project: { _id: 0, customer: 1, product: 1, total: 1 } }]) //Filter documents (early) or groups (late)
## // db.classes.aggregate([{ $sort: { total: -1 } },{ $limit: 3 },{ $project: { _id: 0, product: 1, customer: 1, total: 1 } }])

## // db.classes.aggregate([{ $addFields: { total:  { $round: ["$total", 2] }, quantity:    "$toatal",      lineAmount:  { $round: [{ $multiply: ["$total", "$toatal"] }, 2] }} }, { $project: { _id: 0, product: 1, customer: 1, total: 1, quantity: 1, lineAmount: 1 } } ])
## // db.classes.aggregate([{ $set: { quantity: "$toatal", total: { $round: ["$total", 2] } } },{ $unset: "toatal" } ])

## // db.classes.aggregate([ {$group: {_id: "$customer",orderCount: { $sum: 1 },netTotal:   { $sum: "$total" },avgTotal:   { $avg: "$total" }, products:   { $addToSet: "$product" }}},{ $sort: { netTotal: -1 } },{$project: {_id: 0,customer: "$_id",orderCount: 1, netTotal: { $round: ["$netTotal", 2] }, avgTotal: { $round: ["$avgTotal", 2] }, products: 1 }}])













 db.students.find({ age: { $eq: 14 } })//Students who are exactly 14 years old ($eq)
// or simpler:
db.students.find({ age: 14 })
db.students.find({ grade: { $ne: "A" } }) //Students who are not in grade A ($ne)
db.students.find({ age: { $gt: 14 } })//Students older than 14 ($gt)
db.students.find({ age: { $gte: 15 } })//Students aged 15 or older ($gte)
db.students.find({ age: { $lt: 15 } }) //  Students younger than 15 ($lt)
db.students.find({ age: { $lte: 15 } })//Students aged 15 or younger ($lte)
db.students.find({ city: { $in: ["NYC", "Chicago"] } }) // Students who live in NYC or Chicago ($in)


##
db.posts.updateOne(
  { _id: 1 },
  { $push: { comments: { text: "Great post!", author: "Jane" } } }
)
// Result: new comment object is added to the comments array



 
MongoDB Operators Assignment
Setup
Create and populate a sample collection. Run this once in mongosh:
use school_db
 or older ($gte)
Students younger than 15 ($lt)
Students aged 15 or younger ($lte)
Students who live in NYC or Chicago ($in)
db.students.insertMany([
  { name: "Alice",   age: 14, grade: "A",  subjects: ["math", "science"], city: "NYC" },
  { name: "Bob",     age: 15, grade: "B",  subjects: ["math"],            city: "LA" },
  { name: "Charlie", age: 14, grade: "A",  subjects: ["art", "science"],  city: "Chicago" },
  { name: "Diana",   age: 16, grade: "C",  subjects: ["math", "history"], city: "NYC" },
  { name: "Eve",     age: 15, grade: "B",  subjects: [],                  city: "LA" }
])

Part 1 — Comparison Operators
Write queries to find:
Students who are exactly 14 years old ($eq)
Students who are not in grade A ($ne)
Students older than 14 ($gt)
Students aged 15

Part 2 — Logical Operators
Students in grade A and aged 14 ($and)
Students who live in LA or are grade A ($or)
Students who are not from LA and not grade A ($nor)
Students whose age is not 14 ($not on the age field)


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
Part 1 — Comparison Operators
Write queries to find:

Students who are exactly 14 years old ($eq)
Students who are not in grade A ($ne)
Students older than 14 ($gt)
