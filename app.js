// Import Express module
const express = require('express');
const axios = require('axios');
const app = express();



app.get('/data-from-ms2', async (req, res) => {
  try {
    // Make a GET request to Microservice 2 running on port 3001
    const response = await axios.get('http://name-space-ms2.service-discovery-ms2/ms2');
    res.json({
      message: 'Data from Microservice 2',
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error});
  }
});

app.get('/ms1/test', (req, res) => {
  res.json('TESTING THE DEPLOYMENTs');
});

app.get('/ms1', (req, res) => {
  res.json('Hello, World from server 1');
});




// Set up the server to listen on port 3000
const PORT = 3000;
const server =  app.listen(PORT, () => {
  console.log(`Server magic is running on http://localhost:${PORT}`);
});

// server.keepAliveTimeout = 30 * 1000; // <- important lines
// server.headersTimeout = 35 * 1000;
