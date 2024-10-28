// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

// SETUP AND MIDDLEWARE
const app = express();
const port = 3000;

// Example using custom logger middleware
// const logger = (req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// };
// app.use(logger);

// Example using morgan middleware
app.use(morgan('dev'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pedro', (req, res) => {
  res.send('Hello Pedro!');
});

app.get('/products', (req, res) => {
  const products = ['apple', 'banana', 'orange'];
  res.send(products);
});

app.get('/sum', (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2) {
    res.status(400).send('Please give me num1 and num2 as a query string');
    return;
  }

  const result = Number(num1) + Number(num2);
  res.send(result.toString());
});

app.get('/urls/:id', (req, res) => {
  console.log(req.params);
  res.send('hi!')
});

// LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
