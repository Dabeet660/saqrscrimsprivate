const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    User: String,
    BLogs : Array,
    EpicID: String,
    EndDate: String,
    RoleId: String,

})

module.exports = mongoose.model('testmodel', Schema);