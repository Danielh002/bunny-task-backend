var User = require('../models/user');

var getUsersAndTask = function (req, res) {

    User.aggregate([
        {
            $lookup: {
                from: 'userTask',
                localField: '_id',
                foreignField: 'userId',
                as: 'tasks'
            }
        },
    ]).exec()
    .then(result => {
        console.log(result);  
        res.status(201).json({
            message: 'Getting user and task list',
            result: result
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error creating user',
            error: error
        })
    })
}

module.exports = getUsersAndTask;
