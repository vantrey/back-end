const {getUsers, addUser} = require('./repository');
const express = require('express');
const users = require('./usersRouter')

// create express app
const app = express();

// as a base url
app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks');
});

// добавляем перехватчик (middleware)
app.use((req, res) => {
    res.send(404);
});

app.listen(7777, () => {
    console.log('example')
});
