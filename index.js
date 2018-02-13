const http = require('http');

const hostname = 'localhost';
const port = 3000;

//setup the server:
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
})

//start the server: note the use of backquotes ´´ instead of '' bcause of the variable s used within the message.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});