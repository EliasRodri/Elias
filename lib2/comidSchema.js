const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comidSchema = new Schema({
  nombre: String,
  descripcion: String,
  precio:String,
  niveldificultad:String,
  foto:String,
  receta:Object,
  categorias:Object,
  restaurante:Object,
});

module.exports = mongoose.model("comid", comidSchema);
