/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);