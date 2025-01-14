const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route: GET request
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

// Route: POST request
app.post('/data', (req, res) => {
    const data = req.body;
    res.send({ message: 'Data received!', data });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
