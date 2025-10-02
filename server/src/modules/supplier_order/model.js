const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const SupplierOrder = sequelize.define(
  "SupplierOrder", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "supplier_orders",
  }
);

module.exports = SupplierOrder;