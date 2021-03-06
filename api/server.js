const http = require("http");
const fs = require('fs');
const hostname = '0.0.0.0';
const port = 4000;

// file where we save the data
const fileName = `./data/log`;

if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data", 0744);
}

const server = http.createServer((req, res) => {
  if(!req.url || !req.url.startsWith("/log") || !["GET", "POST"].includes(req.method)) {
    // return 200 on http ping
    if(!req.url || (req.url == "") || (req.url == "/")) {
      res.statusCode = 200;
    } else {
      res.statusCode = 400;
    }
    res.end();
    return;
  }

  if(req.method == "GET") {
    // using sync methods to avoid concurrent access scenarios
    let logs = "No data logged";
    if(fs.existsSync(fileName)) {
      logs = fs.readFileSync(fileName);
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(logs.toString()));
  } else {
    // logging remote IP and User Agent
    const remoteIP = req.socket?.remoteAddress;
    const agent = req.headers["user-agent"];
    const d = new Date();
    const logString = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.toLocaleTimeString()}\t${remoteIP}\t${agent}\n`;
    fs.appendFileSync(fileName, logString);

    res.statusCode = 200;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
