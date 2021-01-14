var User = require('../../models/user'); 

var updateUserFunction = function (req, res) {
    const userId = req.params.userId
    if( req.body.length > 0 &&  userId){
        const updateOps = {};
        for(let ops of req.body){
            updateOps[ops.propName] = ops.value;
        }
        User.updateOne({ _id: userId}, { $set: updateOps}).exec()
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'Updated user',
                    result: result
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error updating user',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error updating user',
            error: 'Data invalid'
        })
    }
}

module.exports = updateUserFunction;