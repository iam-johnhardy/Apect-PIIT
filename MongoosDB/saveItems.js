// // saveItems.js
// const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017";   // your LOCAL MongoDB
// const client = new MongoClient(uri);

// async function saveItems() {
//   try {
//     await client.connect();
//     console.log("Connected to local MongoDB");

//     const db = client.db("util");          // use any DB name you want
//     const items = db.collection("items");

//     const result = await items.bulkWrite([
//       { insertOne: { document: { _id: 1, item: "pen", available: true, soldQty: 700 } } },
//       { insertOne: { document: { _id: 2, item: "pencil", available: false, soldQty: 900 } } },
//       { insertOne: { document: { _id: 3, item: "books", available: true, soldQty: 600 } } }
//     ]);

//     console.log(`Inserted ${result.insertedCount} documents`);
//   } catch (err) {
//     console.error("Error:", err.message);
//   } finally {
//     await client.close();
//   }
// }

// saveItems();

const str = 'John'/ '123456';
const num = 12345;
const bool = true/false
const undefine;
const null = "";

const obj = {
  name: 'john',
  car: 'volvo',
  model: 1980,
  isTrue: true,
  student: ''
}
console.log(obj)
const obj2 = {
  name: 'john',
  car: 'volvo',
  model: 1980,
  isTrue: true
}
//Array
const arr = ['name', 'car', 'model','isTrue']
const json = "{'name: 'john', 'car': 'volvo'}"

console.log(2 < 2 && 10 > 3) 
console.log(false ||clz true)
