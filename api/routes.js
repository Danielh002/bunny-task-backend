'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about')
        .get(controller.about);

    app.route('/user')
        .post(controller.addUser);
    app.route('/user/:userId')
        .patch(controller.updateUser);
    app.route('/user/:userId')
        .delete(controller.deleteUser);


    app.route('/userTask')
        .post(controller.addUserTask);
    app.route('/userTask/:userTaskId')
        .patch(controller.updateUserTask);
    app.route('/userTask/:userTaskId')
        .delete(controller.deleteUserTask);


    app.route('/usersList')
        .get(controller.getUserList);
};