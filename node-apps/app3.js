const http = require('http');
const port = 3003;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello from App 3\n');
});
server.listen(port, () => {
console.log(`App 3 running at http://localhost:${port}/`);
});
