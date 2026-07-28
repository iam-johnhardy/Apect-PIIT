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

const { XmlParser, Xslt } = require('xslt-processor');
const fs = require('fs');

const xml = fs.readFileSync('html.xml', 'utf8');
const xsl = fs.readFileSync('html.xsl', 'utf8');

(async () => {
  const parser = new XmlParser();
  const processor = new Xslt();

  const xmlDoc = parser.xmlParse(xml);
  const xslDoc = parser.xmlParse(xsl);

  const result = await processor.xsltProcess(xmlDoc, xslDoc);

  fs.writeFileSync('output.html', result);
  console.log('✅ output.html created successfully');
})();