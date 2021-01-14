var UserTask = require('../../models/userTask'); 

var deleteUserTask = function (req, res) {
    const userTaskId = req.params.userTaskId
    if( userTaskId ){
        UserTask.remove({ _id: userTaskId }).exec()
        .then(result => {
            console.log(result);  
            res.status(200).json({
                message: 'Deleted usertask',
                result: result
            })
        }).catch(error => {
            res.status(500).json({
                message: 'Error deleting userTask',
                error: error
            })
        })
    }
    else{
        res.status(500).json({
            message: 'Error deleting userTask',
            error: 'request param not found'
        })
    }
}

module.exports = deleteUserTask;