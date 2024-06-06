#!/usr/bin/node
const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node 3-starwars_title.js <movie_id>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      const movieData = JSON.parse(body);
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});
