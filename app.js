const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Welcome to the first Node.js Tutorial! - Clue Mediator');
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});