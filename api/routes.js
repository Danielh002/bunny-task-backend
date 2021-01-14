'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
    app.route('/user')
        .post(controller.addUser);
    app.route('/user/:userId')
        .get(controller.getUserList);
        app.route('/userTask')
        .post(controller.addUserTask);
    app.route('/usersList')
        .get(controller.getUserList);
};