const users = [
    {"id": 1, "name": "Ann"},
    {"id": 2, "name": "Ivan"},
]

const getUsers = () => {
    return users
}

const addUser = (name) => {
    users.push({name: name})
}

exports.getUsers = getUsers;
exports.addUser = addUser;
