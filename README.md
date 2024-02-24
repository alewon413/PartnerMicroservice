Instructions for Microservice

Step 1: Start the Service: Open the terminal for the folder and enter 'node server.js'. This will start the server and begin the process.

Step 2: Receiving Sample Data: Sample data is currently stored in file 'fitness_data.json' in JSON format. To receive the data from the file, open a bash terminal and enter the command 'node requests.js' This will convert the JSON data into text format and write into the file named 'fitness_data.txt'

Step 3: Requesting Sample Data: Data can now be exported as a text file from 'fitness_data.txt'. To request the data from the text file back to another desired format, open another powershell terminal and enter command 'node get_data.js' This will output the data into command line (or another format as desired, this is just a demonstration that it can be requested). The requested data is then deleted and the file 'fitness_data.txt' is ready to use again.

![UML](https://github.com/alewon413/PartnerMicroservice/assets/78775647/93e819c1-4517-441a-9891-1ccb7133787f)
