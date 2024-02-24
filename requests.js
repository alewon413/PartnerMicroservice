const axios = require('axios');
const fs = require('fs');

// Load fitness data from a JSON file
const fitnessData = JSON.parse(fs.readFileSync('fitness_data.json', 'utf8'));

// Define the URL of your server
const url = 'http://localhost:3000/save-fitness-data';

// Send a POST request with the fitness data
axios.post(url, { fitnessData })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
