const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./api/routes');
const app = express();
const port = process.env.PORT || 3000;


const mongooseUri = 'mongodb+srv://' + process.env.MONGO_ATLAS_USER + ':' + process.env.MONGO_ATLAS_PW + '@cluster0.wxhuw.mongodb.net/<dbname>?retryWrites=true&w=majority';
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});

mongoose.connect(mongooseUri, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
})