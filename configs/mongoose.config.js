const uri = "mongodb+srv://andres:15519703.qQ@cluster0.v4zvi.mongodb.net/blog?retryWrites=true&w=majority";
const mongoose = require('mongoose')
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))
module.exports = mongoose
