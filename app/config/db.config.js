module.exports = {
  HOST: "localhost",
  USER: "comptalib",
  PASSWORD: "password",
  DB: "comptalib",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
