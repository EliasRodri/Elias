const User = require("./comidSchema");
exports.getUsers = (req, res) => {
  User.find((err, comidas) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(comidas);
  });
};

exports.getUser = (req, res) => {
  let id = req.params.id;
  let nombre =req.params.nombre;
  let descripcion=req.params.descripcion;
  let precio=req.params.precio;

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
    { nombre: req.params.nombre },
    { descripcion: req.params.descripcion },
    { precio: req.params.precio },
    {niveldificultad:req.params.niveldificultad},
    {foto:req.params.foto},
    {receta:req.params.receta},
    {categorias:req.params.categorias},
    {restaurante:req.params.restaurante},
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
