const fetchApi
fecth api = 'https://6a59ff28ad8332e75f01fbde.mockapi.io/student/student'


// var name= 'john';
// console.log(name)

// let obj = {
//     name: 'john',
//     age: 30,
//     course: 'typescript'
// }
// const student = JSON.stringify(obj)
// console.log(student)


// fetch("https://6a58f25068601fc330e98ee2.mockapi.io/waste/waste")
// .then(r => r.json())
// .then(
//     console.log
// )
// .catch(error => console.log('err code',error))


// const xslt = require('xslt-processor');
// const fs = require('fs');

// const xml = fs.readFileSync('html.xml', 'utf8');
// const xsl = fs.readFileSync('html.xsl', 'utf8');

// const result = xslt.xsltProcess(
//     xslt.xmlParse(xml),
//     xslt.xmlParse(xsl)
// );

// console.log(result);


// const name = input('Enter your name: ');
// console.log(`Hello, ${name}!`);
// document.getElementById('parser').innerHTML = `Hello, ${name}!`;


fetch("https://6a59ff28ad8332e75f01fbde.mockapi.io/student/student")
.then(response => {
 
  if (!response.ok) {
    throw new Error('Network response was not ok');
  } 
    return response.text();
})
.then(a => {
  myDisplayer(a);
});
// Funtion to display any text
function myDisplayer(text) {
//   document.getElementById("parser").innerHTML = text;
//   console.log(text)
// alert('sucessful')
}


function greeting(w){
    return w
}
//alert(greeting('hello world'))

if (true) {
    let x = 100;
   
}else{
    // alert('false')
}

// alert('false')
// let c = prompt('Enter your Username: ')
// alert (`Welcome Back, ${c}!`)
// console.log(`Hello, ${c}!`)



//  async function myFunction() {
//     //code
//     let r = await 'John'
//     let listOfItems = await ['item1', 'item2', 'item3'];
//     let response = await fetch("https://6a59ff28ad8332e75f01fbde.mockapi.io/student/student");
//     let data = await response.json();
//     console.log(data);
//     console.log(r)
//     console.log(listOfItems)
// }
// myFunction()


const text = '{"name":"John","age":30,"city":"New York"}'
const obj = JSON.parse(text);
console.log(obj)

const jsonString = { name: 'John', age: 30, city: 'New York' }
const jsonText = JSON.stringify(jsonString);
console.log(jsonText)