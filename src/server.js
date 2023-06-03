const express = require('express');

// Rest of your code


const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('movie-mania-backend-hehe');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});