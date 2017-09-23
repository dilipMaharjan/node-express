const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
    res.send('Hello Node');
});

//listener
app.listen(3000, () => {
    console.log('Server started at port 3000 ...')
});