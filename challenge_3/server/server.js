var express = require('express');
var app = express();
var path = require('path');
var models = require('./models/model')
var user = require('./models/user')
const utils = require('./lib/hashUtils');

const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

// app.get('/confirm', (req, res) => {
//   console.log('confirm get')
//   let response = 
//   res.send(
// });
app.post('/billing', (req, res) => {
  // user.addBilling(req.body);
  // res.sendStatus(201);
  // res.end();
  req.on(data, chunk => {
    console.log(chunk)
  })
  req.on('end', () => {
    let response = 'hate this';
    console.log(response)
    res.send(response)
  })
  res.end()
});
  
  app.post('/shipping', (req, res)=> {
    console.log('post ship')
    user.addShipping(req.body);
    res.sendStatus(201)
    res.end()
  });
  
  app.post('/user', (req, res) => {
    console.log('post use')
    user.create(req.body);
    res.sendStatus(201)
    res.end()
  });


  module.exports = app;