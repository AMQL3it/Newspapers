const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Product = sequelize.define(
  "Product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    type: { type: DataTypes.ENUM("newspaper", "magazine"), allowNull: false, defaultValue: "newspaper" },
    unit_price: { type: DataTypes.FLOAT },
    sell_price: { type: DataTypes.FLOAT },
    language: { type: DataTypes.ENUM("english", "bangla") },
    status: { type: DataTypes.ENUM("daily", "weekly", "biweekly", "monthly") },
  },
  {
    tableName: "products",
  }
);

module.exports = Product;
