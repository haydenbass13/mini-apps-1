var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

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
    console.log('ship post')
    res.sendStatus(201)
    res.end()
  })
  
  app.post('/user', (req, res) => {
    console.log('user post', req.body)
    res.sendStatus(205)
    res.end()
  })

  app.post('/billing', (req, res) => {
    console.log('billing post')
    res.sendStatus(201);
    res.end();
  })

  module.exports = app;