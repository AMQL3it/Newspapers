const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const SupplierProduct = sequelize.define(
  "SupplierProduct", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
  },
  {
    tableName: "supplier_products",
  }
);

module.exports = SupplierProduct;