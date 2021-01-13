var userListFunction = function (req, res) {
    let userList = [
        {
            "id": 1,
            "name": "Daniel",
           
        },
        {
            "id": 2,
            "name": "Pipe",
        }
    ]
    res.json(userList);
}

module.exports = userListFunction;
