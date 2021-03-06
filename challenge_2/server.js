// `The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called children.`

//all report generation logic is comes from here
//dont use via npm 
//JQUERY NOT ALLOWED ON SERVER

var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var { parse } = require('querystring');

app.use(express.static('client'));
const port = 4568;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

app.post('/upload_json', (req, res) => {
  res.status(201)
  let body = '';
  req.on('data', chunk => {
        body += chunk.toString();
        body = JSON.parse(body);  
    })
  req.on('end', () => {
    let response = renderedCSV(body)
    console.log(response)
    res.send(response)
  })
})

//------------templates------------
var renderedCSV = function(object) {
  let csv = Object.keys(object)
  csv = csv.slice(0, csv.length-1).join(',') + ',';

  function parser(object) {
    for (var i in object) {
      if(i !== 'children')
      csv += `${object[i]},`
    }
    if(object.children && object.children !== 0) {
      for (var child = 0; child < object.children.length; child++) {
       parser(object.children[child])
      }
    }
  }
  parser(object);
  return csv;
}