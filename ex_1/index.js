const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/:word', (req, res) => {
    return res.send( `${req.params.word} page`);
});



app.listen(port, () => {
    console.log(`Server running on port: http:/localhost:${port}`);
});
