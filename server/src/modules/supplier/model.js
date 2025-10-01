const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Supplier = sequelize.define(
  "Supplier", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    contact_person: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    address: { type: DataTypes.TEXT },
    note: { type: DataTypes.TEXT },
  },
  {
    tableName: "suppliers",
  }
);

module.exports = Supplier;