const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Product = sequelize.define(
  "Product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_title: {
      type: DataTypes.STRING,
    },
    product_type: {
      type: DataTypes.ENUM("newspaper", "magazine"),
      allowNull: false,
      defaultValue: "newspaper",
    },
    product_language: {
      type: DataTypes.ENUM("english", "bangla"),
      defaultValue: "bangla",
    },
    product_status: {
      type: DataTypes.ENUM("daily", "weekly", "biweekly", "monthly"),
      defaultValue: "daily",
    },
    product_buy_price: {
      type: DataTypes.FLOAT,
    },
    product_sell_price: {
      type: DataTypes.FLOAT,
    }
  },
  {
    tableName: "products",
  }
);

module.exports = Product;
