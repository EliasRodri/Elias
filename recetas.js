express = require("express");
mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
mongoose
  .connect(
    // "mongodb+srv://admin:viernestrece13@cluster0-fnnzo.mongodb.net/gouniversity?retryWrites=true",
    "mongodb://localhost:27017/comidas",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });
var comidas = require("./lib3/recet");

app.get("/recetas", (req, res) => {
  comidas.getUsers(req, res);
});

app.get("/recetas/:id", (req, res) => {
  comidas.getUser(req, res);
});

app.post("/recetas", (req, res) => {
  comidas.newUser(req, res);
});
app.put("/recetas/:id", (req, res) => {
  comidas.updateUser(req, res);
});

app.delete("/recetas/:id", (req, res) => {
  comidas.deleteUser(req, res);
});
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
