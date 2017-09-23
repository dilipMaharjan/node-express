const express = require('express');
const path = require('path');

//init express
const app = express();

//setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Welcome'
    });
});
app.get('/articles', (req, res) => {
    res.render('articles', {
        title: 'Articles'
    });
});

//listener
app.listen(3000, () => {
    console.log('Server started at port 3000 ...')
});