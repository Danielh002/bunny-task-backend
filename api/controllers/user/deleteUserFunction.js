var User = require('../../models/user'); 

var deleteUser = function (req, res) {
    const userId = req.params.userId
    User.remove({ _id: userId }).exec()
        .then(result => {
            console.log(result);  
            res.status(200).json({
                message: 'Delete user',
                result: result
            })
        }).catch(error => {
            res.status(500).json({
                message: 'Error deleting user',
                error: error
            })
        })
}

module.exports = deleteUser;
