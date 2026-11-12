const express = require('express');
const app = express();
app.use(express.json());
let users = [
    {id:1, name:"Usha"}, 
    {id:2, name:"Rahul"}
];
app.get('/users', (req, res) => res.json(users));
app.post('/users', (req, res) => {
  users.push(req.body);
  res.send('User Added');
});
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.send('User Deleted');
});
app.listen(3000, () => console.log('Server on 3000'));