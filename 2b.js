const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
        <h2>Student Registration Form</h2>
        <form action="/submit" method="POST">
            Name: <input type="text" name="name"><br><br>
            Age: <input type="number" name="age"><br><br>
            Email: <input type="email" name="email"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    res.send(`
        <h2>Form Submitted Successfully!</h2>
        Name: ${name}<br>
        Age: ${age}<br>
        Email: ${email}
    `);
});
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
