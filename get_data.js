const fs = require('fs');

function outputAndDeleteTextData() {
  // Read the fitness data from the text file
  fs.readFile('fitness_data.txt', 'utf8', (err, data) => {
    if (err) {
      // If there's an error reading the file, log the error
      console.error('Error reading file:', err);
    } else {
      // Output the text data to the command line
      console.log('Fitness data:', data);
      
      // Delete the contents of the text file
      fs.writeFile('fitness_data.txt', '', (writeErr) => {
        if (writeErr) {
          // If there's an error deleting the file contents, log the error
          console.error('Error deleting file contents:', writeErr);
        } else {
          console.log('File contents deleted successfully');
        }
      });
    }
  });
}

// Call the function to output and delete the text data in the command line
outputAndDeleteTextData();
