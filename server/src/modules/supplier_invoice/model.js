const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const SupplierInvoice = sequelize.define(
  "SupplierInvoice", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.ENUM("pending", "paid", "overdue"), defaultValue: "pending", allowNull: false },
    paid_date: { type: DataTypes.DATEONLY },
    note: { type: DataTypes.TEXT },
  },
  {
    tableName: "supplierInvoices",
  }
);

module.exports = SupplierInvoice;