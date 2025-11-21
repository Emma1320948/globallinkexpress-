const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from root directory
app.use(express.static(path.join(__dirname)));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for tracking page
app.get('/tracking', (req, res) => {
    res.sendFile(path.join(__dirname, 'tracking.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
