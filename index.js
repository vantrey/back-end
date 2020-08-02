const {getUsers, addUser} = require('./repository');
const express = require('express');
const users = require('./usersRouter');
const cors = require('cors');
const bodyParser = require('body-parser');


// create express app
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// as a base url
app.use('/users', users);

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
