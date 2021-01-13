const mongoose = require('mongoose')

const uri = "mongodb+srv://dbDaniel:9NyMgcRuK5uH86v@cluster0.wxhuw.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(uri, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })