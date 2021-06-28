module.exports = (sequelize, Sequelize) => {
  const Society = sequelize.define("society", {
    name: {
      type: Sequelize.STRING
    },
    adresse: {
      type: Sequelize.STRING
    },
  });

  return Society;
};