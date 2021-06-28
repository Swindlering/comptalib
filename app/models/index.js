const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.societies = require("./society.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);


db.societies.belongsToMany(db.users, {
  through: "user_society",
  as: "users",
  foreignKey: "society_id",
});
db.users.belongsToMany(db.societies, {
  through: "user_society",
  as: "societies",
  foreignKey: "user_id",
});

module.exports = db;
