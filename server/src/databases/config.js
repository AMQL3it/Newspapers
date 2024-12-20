const Sequelize = require('sequelize');

const sequelize = new Sequelize("ndms", "root", "newspaper", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  });

module.exports = sequelize;