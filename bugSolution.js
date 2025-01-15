const http = require('http');
const portScanner = require('portscanner');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

portScanner.findAPortNotInUse(8080, 8090, (error, port) => {
  if (error) {
    console.error('Error checking ports:', error);
    process.exit(1);
  } else {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});