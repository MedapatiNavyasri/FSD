const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('2ahome', {
        name: 'Navya',
        course: 'Computer Science',
        college: 'Vishnu Institute of Technology',
        year: '2026'
    });
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
    console.log('EJS application started');
});