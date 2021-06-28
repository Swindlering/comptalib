module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    // id: {
    //   type: Sequelize.NUMBER
    // },
    name: {
      type: Sequelize.STRING
    },
    adresse: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address',
        },
      },
      unique: {
        args: true,
        msg: 'Email already exists',
      },
    },
  });

  return User;
};
