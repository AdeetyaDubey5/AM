const express = require('express');
const app = express();
const port = 3000;

// Define a GET endpoint
app.get('/api', async (req, res) => {
    try {
      const response = await fetch('https://cmsapi.groww.in/api/v1/dailydigests?_limit=1&_start=0');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });




// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});