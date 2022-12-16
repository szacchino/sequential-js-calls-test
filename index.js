const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/frammento1', (req, res) => {
  timer(3000).then((_) => {
    console.log('done');
    res.sendFile(path.resolve('pages/frammento1.html'));
  });
});

app.get('/frammento2', (req, res) => {
  timer(3000).then((_) => {
    console.log('done');
    res.sendFile(path.resolve('pages/frammento2.html'));
  });
});

app.get('/frammento3', (req, res) => {
  timer(3000).then((_) => {
    console.log('done');
    res.sendFile(path.resolve('pages/frammento3.html'));
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
