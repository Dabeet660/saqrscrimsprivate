const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
   User : String,
   Number : {type: Number, default: 0},
   UserTag : String
})

module.exports = mongoose.model('lmodels.js', Schema)