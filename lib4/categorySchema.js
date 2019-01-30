const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoria: String,
  descripcion: String,
  encargado:String,
});

module.exports = mongoose.model("category", categorySchema);
