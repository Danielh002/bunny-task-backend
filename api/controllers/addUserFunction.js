var User = require('../models/user'); 
var mongoose = require('mongoose');

var addUser = function (req, res) {
    console.log(req.body)
    const user = new User({
        _id:  new mongoose.Types.ObjectId(),
        name: req.body.name
    })

    user.save().then(result => {
        console.log(result);  
        res.status(201).json({
            message: 'Created user',
            user: user
        })
    }).catch(error => {
        res.status(500).json({
            message: 'Error creating user',
        })
    })
}

module.exports = addUser;
