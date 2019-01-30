const User = require("./UserSchema");
exports.getUsers = (req, res) => {
  User.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getUser = (req, res) => {
  let id = req.params.id;
  let nombre =req.params.nombre;
  let direcciion=req.params.direcciion;
  let platos=req.params.platos;

  User.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newUser);
  });
};

exports.updateUser = (req, res) => {
  let nombre = req.body.nombre;
  User.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: req.params.nombre },
    { direcciion: req.params.direcciion },
    { platos: req.params.platos },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
