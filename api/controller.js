var properties = require('../package.json')

var addUserFunction = require('./controllers/user/addUserFunction');
var deleteUserFunction = require('./controllers/user/deleteUserFunction');
var updateUserFunction = require('./controllers/user/updateUserFunction');
var addUserTaskFunction = require('./controllers/userTask/addUserTaskFunction');
var deleteUserTaskFunction = require('./controllers/userTask/deleteUserTaskFunction');
var updateUserTaskFunction = require('./controllers/userTask/updateUserTaskFunction');
var getUsersAndTaskFunction =  require('./controllers/getUsersAndTaskFunction');


var controllers = {
    about: function (req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    addUser: (req, res) => addUserFunction(req, res),
    deleteUser: (req, res) => deleteUserFunction(req, res),
    updateUser: (req, res) => updateUserFunction(req, res),
    addUserTask: (req, res) => addUserTaskFunction(req, res),
    deleteUserTask: (req, res) => deleteUserTaskFunction(req, res),
    updateUserTask: (req, res) => updateUserTaskFunction(req, res),
    getUsersAndTask: (req, res) => getUsersAndTaskFunction(req, res),
};

module.exports = controllers;