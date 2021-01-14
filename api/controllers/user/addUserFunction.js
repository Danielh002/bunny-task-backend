var User = require('../../models/user'); 
var mongoose = require('mongoose');

var addUser = function (req, res) {
    if( req.body.name ){
        const user = new User({
            _id:  new mongoose.Types.ObjectId(),
            name: req.body.name
        })
    
        user.save()
            .then(result => {
                console.log(result);  
                res.status(201).json({
                    message: 'Created user',
                    result: user
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Error creating user',
                    error: error
                })
            })
    }
    else{
        res.status(500).json({
            message: 'Error creating user',
            error: 'Description is required'
        })
    }
}

module.exports = addUser;
