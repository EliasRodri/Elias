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
var user = require("./lib/User");

app.get("/restaurantes", (req, res) => {
  user.getUsers(req, res);
});

app.get("/restaurantes/:id", (req, res) => {
  user.getUser(req, res);
});

app.post("/restaurantes", (req, res) => {
  user.newUser(req, res);
});
//platos
//platos
app.put("/restaurantes/:id", (req, res) => {
  user.updateUser(req, res);
});

app.delete("/restaurantes/:id", (req, res) => {
  user.deleteUser(req, res);
});
app.listen(9000);
console.log(`Server on %s ${app.settings.env}`);
