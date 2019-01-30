const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recetSchema = new Schema({
  ingredientes: String,
  cantidad: String,
});

module.exports = mongoose.model("recet", recetSchema);
