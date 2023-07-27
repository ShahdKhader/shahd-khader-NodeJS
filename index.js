const http = require('http');
const fs = require('fs');
const PORT = 3003;
const server = http.createServer((req, res) => {
  const currentTime = new Date().toLocaleString();
  const requestedURL = req.url;
  const logData = `${currentTime} - ${requestedURL}\n`;
  fs.appendFile('requests.txt', logData, (err) => {
    if (err) {
      console.error('Error writing to requests.txt:', err);
    }
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Request logged successfully!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
