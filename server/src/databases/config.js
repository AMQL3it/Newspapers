const Sequelize = require('sequelize');

const sequelize = new Sequelize("newspaper", "root", "12345", {
    host: "localhost",
    dialect: "mysql",
    port: 3307,
    logging: false,
  });

module.exports = sequelize;