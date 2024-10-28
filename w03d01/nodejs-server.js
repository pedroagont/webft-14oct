const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === 'GET' && req.url === '/pedro') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Pedro :)');
  } else if (req.method === 'GET' && req.url === '/products') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Here is your list of products ');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world!');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
