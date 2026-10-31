rerquire('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/twitter', (req, res) => {
  res.send('pammikumari');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login for further process</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>Welcome in YouTube</h2>');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
