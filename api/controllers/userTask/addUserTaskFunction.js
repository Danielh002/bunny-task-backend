var UserTask = require('../../models/userTask'); 
var mongoose = require('mongoose');

var addUserTask = function (req, res) {
    if(req.body.description && req.body.state && req.body.userId){
        const userTask = new UserTask({
            _id:  new mongoose.Types.ObjectId(),
            description: req.body.description,
            state: req.body.state,
            userId: req.body.userId
        })
    
        userTask.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Created user task',
                    result: userTask
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error saving in db',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error creating user task',
            error: 'Invalid data'
        })
    }
}

module.exports = addUserTask;
