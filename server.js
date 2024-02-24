const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to save fitness data
app.post('/save-fitness-data', (req, res) => {
  const fitnessData = req.body.fitnessData;

  // Save fitness data to a text file
  fs.writeFile('fitness_data.txt', JSON.stringify(fitnessData), (err) => {
    if (err) {
      console.error('Error saving fitness data:', err);
      res.status(500).send('Error saving fitness data');
    } else {
      console.log('Fitness data saved successfully');
      res.send('Fitness data saved successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
