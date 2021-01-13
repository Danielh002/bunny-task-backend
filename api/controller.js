var properties = require('../package.json')
var userListFunction = require('./controllers/usersListFunction');

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
    getUserList: (req, res) => userListFunction(req, res)
};

module.exports = controllers;