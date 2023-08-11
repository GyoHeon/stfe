import { createServer } from "http";

const PORT = 3000;
const targetObject = { a: 1, b: 2, c: 3 };

const server = createServer((req, res) => {
  if (req.method === "POST" && req.url === "/home") {
    req.on("data", (data) => {
      console.log(data);
      const stringfiedData = data.toString();
      console.log(stringfiedData);
      Object.assign(targetObject, JSON.parse(stringfiedData));
    });
  } else {
    if (req.url === "/home") {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify(targetObject));
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });

      res.write("<html><body><h1>About</h1></body></html>");
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
