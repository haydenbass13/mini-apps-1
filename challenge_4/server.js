const express = require('express');
const app = express();
const parser = require('body-parser');
const port = 8000;
const path = require('path');

app.use(parser.json());
app.use(express.static(path.join(__dirname, './client/dist')));
// app.use(parser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

module.exports = app;