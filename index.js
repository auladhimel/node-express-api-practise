const { application } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow. Yes, I am super excited. And my name is Aulad Himel Himu. I want to be a software Engineer.');
})

const users = [
    { id: 0, name: 'Roushan', email: 'Roushan@gmail.com' },
    { id: 1, name: 'Arifin Shuvo', email: 'shuvo@gmail.com' },
    { id: 2, name: 'Shakib Khan', email: 'shakib@gmail.com' },
    { id: 3, name: 'Arifin Nisho', email: 'Nisho@gmail.com' },
    { id: 4, name: 'Apurbo', email: 'Apurbo@gmail.com' },
    { id: 5, name: 'Sium', email: 'sium@gmail.com' },
    { id: 6, name: 'Chonchol', email: 'Chonchol@gmail.com' }
];

app.get('/users', (req, res) => {

    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users);
    }


})

// app.post method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})



app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})



app.listen(port, () => {
    console.log('Console from listen function', port);
})