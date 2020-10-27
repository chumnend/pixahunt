'use strict';

const express = require('express');
const serve = require('serve-static');
const path = require('path');

// application configuration
const app = express();
app.use('/', serve(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('application started on port', port);
});
