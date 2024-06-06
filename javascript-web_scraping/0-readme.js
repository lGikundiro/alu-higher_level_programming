#!/usr/bin/node
const fs = require('fs');

// Check if the file path argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node read_file.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the file content in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log(data);
  }
});
