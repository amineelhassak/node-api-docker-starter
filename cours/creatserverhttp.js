const http = require("http");

http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.end("Connection is Success");
    }
}).listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});