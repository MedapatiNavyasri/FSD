const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS');
});
app.get('/home', (req, res) => {
    res.send('This is Home Page');
});
app.get('/about', (req, res) => {
    res.send('This is About Page');
});
app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send('Name: ' + name + ', Age: ' + age);
});
app.get('/build', (req, res) => {
    const url = '/user/' + 101;
    res.send('Generated URL: ' + url);
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
