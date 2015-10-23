var mongoose = require('mongoose');
var Schema = mongoose.Schema;

Computer = new Schema({
    brand: String,
    storage: Number,
    memory: Number
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.modle('computers', Computer);
