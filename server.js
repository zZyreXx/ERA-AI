const http = require('http');

// Create a simple server
const server = http.createServer((req, res) => {
  // Handle incoming requests
  if (req.url === '/data') {
    // Respond with some data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } else {
    // Respond with a 404 error for unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
