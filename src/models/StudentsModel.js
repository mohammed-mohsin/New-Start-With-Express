const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name: String,
    Age: Number,
    Roll:String,
    Class:String,
    Remark:String,
})

const studentsModel= mongoose.model("students", DataSchema);

module.exports = studentsModel;