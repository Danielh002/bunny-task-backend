var User = require('../../models/user'); 

var deleteUser = function (req, res) {
    const userId = req.params.userId
    if( userId ){
        User.remove({ _id: userId }).exec()
        .then(result => {
            console.log(result);  
            res.status(200).json({
                message: 'Deleted user',
                result: result
            })
        }).catch(error => {
            res.status(500).json({
                message: 'Error deleting user',
                error: error
            })
        })
    }
    else{
        res.status(500).json({
            message: 'Error deleting user',
            error: 'request param not found'
        })
    }
}

module.exports = deleteUser;
