module.exports = app => {
  const societies = require("../controllers/society.controller.js");

  var router = require("express").Router();

  // Create a new society
  router.post("/", societies.create);

  // Retrieve all societies
  router.get("/", societies.findAll);

  // Retrieve a single society with id
  router.get("/:id", societies.findOne);

  // Update a User with id
  router.put("/:id", societies.update);

  // put a new user
  router.put("/:idSociety/user/:idUser", societies.addUser);

  // Delete a User with id
  // router.delete("/:id", societies.delete);

  // Delete all Users
  // router.delete("/", societies.deleteAll);

  app.use('/api/societies', router);
};