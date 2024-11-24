const http = require('http');
const port = 3001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from App 1\n');
});
server.listen(port, () => {
    console.log(`App 1 running at http://localhost:${port}/`);
});