'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
    app.route('/addUser')
        .post(controller.addUser);
    app.route('/usersList')
        .get(controller.getUserList);
};