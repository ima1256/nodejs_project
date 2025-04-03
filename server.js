var http = require("http");
var dt = require("./mymodule");
var url = require("url");

function createServer(port) {
  let server = http.createServer(function (req, res) {
    if (req.url === "/favicon.ico") {
      res.writeHead(204, { "Content-Type": "image/x-icon" }); // No Content response
      return res.end();
    }

    var myurl = url.parse(req.url, true).query;

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        text: "Hello World!" + `${req.url}`,
        status: 200,
        success: true,
        queryParsed: myurl,
      })
    );
  });
  server.listen(port);
}



createServer(8080);

createServer(7777);
