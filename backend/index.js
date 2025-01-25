const express = require('express'); 
const app = express(); 
const PORT = 3000; 
const path = require('path');

// Serve static files (images, CSS, JS) from the 'frontend' folder
app.use('/static', express.static(path.join(__dirname, '../frontend')));

app.use(express.json());

// Serve the specific main.html file for the root route
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'loginpage', 'landing-page', 'main.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('An error occurred while loading the page.');
        }
    });
});


app.get('/register', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'loginpage', 'index.html'); // Adjust this path
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error loading register page:', err);
            res.status(500).send('An error occurred while loading the register page.');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
