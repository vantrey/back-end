const {getUsers, addUser} = require('./repository');

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    let users = await getUsers();
    const search = req.query.search;

    if (search) {
        users = users.filter(u => u.name.indexOf(search) > -1);
    }

    res.send(users);
});

router.get('/:id', async (req, res) => {
    const users = await getUsers();
    const userId = req.params.id
    const user = users.find(u => u.id === Number(userId));
    if (user) {
        res.send(user);
    } else {
        res.send(404);
    }

});

router.post('/', async (req, res) => {
    const name = req.body.name;
    await addUser(name);
    res.send({success: true});
});

module.exports = router;