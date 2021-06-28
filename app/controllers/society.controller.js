const db = require("../models");
const Society = db.societies;
const User = db.users;

// Create and Save a new Society
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.adresse) {
    res.status(400).send({
      message: "Content can not be empty! Please add all information about the society"
    });
    return;
  }

  // Create a society
  const society = {
    name: req.body.name,
    adresse: req.body.adresse,
  };

  // Save Society in the database
  Society.create(society)
    .then(data => {
      res.send(data);
      console.log(">> Created Society: " + JSON.stringify(society, null, 2));
    })
    .catch(err => {
      console.log(">> Error while creating the Society: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Society."
      });
    });
};

// Retrieve all with societies from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Society.findAll({
    where: condition,
    include: [
      {
        model: User,
        as: "users",
        attributes: ["id", "name", "email", "adresse"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(">> Error while retrieving Societies: ", err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Societies."
      });
    });
};

// Find a single Society with an id

exports.findOne = (req, res) => {
  const id = req.params.id;

  Society.findByPk(id, {
    include: [
      {
        model: User,
        as: "users",
        attributes: ["id", "name", "email", "adresse"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then(data => {
      if (!data) {
        res.status(404).send({ error: 'Not found!' });
      }
      res.send(data);
    })
    .catch(err => {
      console.log(">> Error while finding Society: ", err);
      res.status(500).send({
        message: "Error retrieving Societies with id=" + id
      });
    });
};

// Update a Society by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Society.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Society was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Society with id=${id}. Maybe Society was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log(">> Error while adding Society: ", err);
      res.status(500).send({
        message: "Error updating Society with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.addUser = (req, res) => {
  const idSociety = req.params.idSociety;
  const idUser = req.params.idUser;

  Society.findByPk(idSociety)
    .then((society) => {
      if (!society) {
        throw new Error('Society not found!');
      }
      return User.findByPk(idUser).then((user) => {
        if (!user) {
          throw new Error("User not found!");
        }

        society.addUser(user);
        console.log(`>> added User id=${user.id} to Society id=${society.id}`);
        res.send({
          message: `${user.name} was add to Society ${society.name}`
        });
      });
    })
    .catch(err => {
      console.log(">> Error while adding an User to Society: ", err);
      res.status(500).send({
        message: "Error updating Society by addind user with id=" + idUser
      });
    });
};
