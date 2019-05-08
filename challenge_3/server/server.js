var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

app.use(express.static('client'));
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});