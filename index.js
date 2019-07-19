const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Good job Oleksandr!\nNew commit to application master branch on Github triggers jenkins job what create version based Docker container with updated application and run it!!!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
