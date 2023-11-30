//question 7
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('I am happy to learn full stack web development from PW Skills!');
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
