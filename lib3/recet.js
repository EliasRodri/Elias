const User = require("./recetSchema");
exports.getUsers = (req, res) => {
  User.find((err, comidas) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(comidas);
  });
};

exports.getUser = (req, res) => {
  let id = req.params.id;
  let ingredientes =req.params.ingredientes;
  let cantidad=req.params.cantidad;

  User.find({ _id: id }, (err, comidas) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(comidas);
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
    { ingredientes: req.params.ingredientes },
    { cantidad: req.params.cantidad },
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
