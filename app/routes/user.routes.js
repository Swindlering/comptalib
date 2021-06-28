module.exports = app => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", user.create);

  // Retrieve all user
  router.get("/", user.findAll);

  // Retrieve a single U with id
  router.get("/:id", user.findOne);

  // Update a U with id
  router.put("/:id", user.update);

  // Delete a U with id
  router.delete("/:id", user.delete);

  // Delete all user
  router.delete("/", user.deleteAll);

  app.use('/api/users', router);
};
