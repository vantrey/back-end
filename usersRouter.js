const {getUsers, addUser} = require('./repository');

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

router.get('/:id', async (req, res) => {
    const users = await getUsers();
    const userId = req.params.id
    const user = users.find(u => u.id === Number(userId));
    if(user) {
        res.send(user);
    } else {
        res.send(404);
    }

});

router.post('/', async (req, res) => {
    await addUser('Lesh');
    res.send({success: true});
});

module.exports = router;