var properties = require('../package.json')
var userListFunction = require('./controllers/usersListFunction');
var addUserFunction = require('./controllers/addUserFunction');

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
    getUserList: (req, res) => userListFunction(req, res)
};

module.exports = controllers;