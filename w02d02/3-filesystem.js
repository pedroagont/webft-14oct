// import { readFile } from 'node:fs'; // ES6
const { readFile } = require('fs'); // CommonJS

readFile('./lorem-ipsum.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
