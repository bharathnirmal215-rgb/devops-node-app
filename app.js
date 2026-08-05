const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.end(`
        <h1>Hello from Nirmal DevOps Practice Server!</h1>
        <h2>Node.js Application</h2>
        <p>Version: 1.0</p>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});