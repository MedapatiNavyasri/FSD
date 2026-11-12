const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('2bhome');
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    res.render('2bresult', { name, email, age });
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
