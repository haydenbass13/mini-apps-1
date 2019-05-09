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

app.get('/confirm', (req, res) => {
  console.log('confirm get')
  res.sendStatus(200)
  res.end()
});


// app.get('/user', (req, res) => {
  //   res.write('you got a user!')
  //   res.send(201)
  // })
  
  app.post('/shipping', (req, res)=> {
    console.log(req.body)
    user.addShipping(req.body);
    res.sendStatus(201)
    res.end()
  })
  
  app.post('/user', (req, res) => {
    user.create(req.body);
    res.sendStatus(201)
    res.end()
  })

  app.post('/billing', (req, res) => {
    console.log('billing post')
    res.sendStatus(201);
    res.end();
  })

  module.exports = app;