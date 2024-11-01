// Import Express module
const express = require('express');
const axios = require('axios');
const app = express();

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Connection', 'keep-alive');
//     res.setHeader('Keep-Alive', 'timeout=30');
//     next();
// });
// Define a simple GET route
app.get('/ms1', (req, res) => {
  res.json('Hello, World from server 1');
});

app.get('/test', (req, res) => {
  res.json('TESTING THE DEPLOYMENT');
});

app.get('/data-from-ms2', async (req, res) => {
  try {
    // Make a GET request to Microservice 2 running on port 3001
    const response = await axios.get('http://two-serive-cloud-map:3001/ms2');
    res.json({
      message: 'Data from Microservice 2',
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error accessing Microservice 2' });
  }
});


// Set up the server to listen on port 3000
const PORT = 3000;
const server =  app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.keepAliveTimeout = 30 * 1000; // <- important lines
// server.headersTimeout = 35 * 1000;
