const express = require('express'); 
const app = express(); 
const PORT = 3000; 
const path = require('path')
app.use(express.json())

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'loginpage', 'landing-page', 'main.html')
    res.sendFile(filePath);

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
