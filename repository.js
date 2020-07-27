const {readJsonFromFile, writeJsonToFile} = require('./fs-utils');

const getUsers = () => {

    return readJsonFromFile('db');
}

const addUser = async (name) => {
    let users = await getUsers();
    users.push({name: name})

    return writeJsonToFile('db', users);
}

exports.getUsers = getUsers;
exports.addUser = addUser;
