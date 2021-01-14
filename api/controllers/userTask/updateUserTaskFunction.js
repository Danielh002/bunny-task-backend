var UserTask = require('../../models/userTask'); 

var updateUserFunction = function (req, res) {
    const userTaskId = req.params.userTaskId
    if( req.body.length > 0 &&  userTaskId){
        const updateOps = {};
        for(let ops of req.body){
            updateOps[ops.propName] = ops.value;
        }
        UserTask.updateOne({ _id: userTaskId}, { $set: updateOps}).exec()
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'Updated userTask',
                    result: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error updating userTask',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error updating userTask',
            error: 'Data invalid'
        })
    }
}

module.exports = updateUserFunction;