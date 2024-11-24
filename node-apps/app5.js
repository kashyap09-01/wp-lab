const http = require('http');
const port = 3005;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello from App 5\n');
});
server.listen(port, () => {
console.log(`App 5 running at http://localhost:${port}/`);
});
