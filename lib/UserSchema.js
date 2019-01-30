const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nombre: String,
  direccion: String,
  platos: Object,
});

module.exports = mongoose.model("User", UserSchema);
