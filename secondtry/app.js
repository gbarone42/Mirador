const express = require('express');
const cors = require('cors');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

// Define a route to serve the Mirador HTML page
app.get('/mirador', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mirador.html')); // Adjust the path as needed
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});