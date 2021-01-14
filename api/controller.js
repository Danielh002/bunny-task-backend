var properties = require('../package.json')
var userListFunction = require('./controllers/usersListFunction');
var addUserFunction = require('./controllers/user/addUserFunction');
var addUserTaskFunction = require('./controllers/userTask/addUserTaskFunction');


var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getDistance: function (req, res) {
        res.json("Hola");
    },
    addUser: (req, res) => addUserFunction(req, res),
    deleteUser: (req, res) => deleteUser(req, res),
    getUserList: (req, res) => userListFunction(req, res),
    addUserTask: (req, res) => addUserTaskFunction(req, res),

};

module.exports = controllers;