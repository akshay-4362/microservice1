// Import Express module
const express = require('express');
const app = express();

// Define a simple GET route
app.get('/stage/ms1', (req, res) => {
  res.send('Hello, World from server 1');
});

// Set up the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
