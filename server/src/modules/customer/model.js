const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Customer = sequelize.define(
  "Customer",{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    room_no: { type: DataTypes.STRING, allowNull: false, unique: true },
    activity: { type: DataTypes.ENUM("active", "inactive"), allowNull: false, defaultValue: "active" },
    branch: { type: DataTypes.STRING },
  },
  {
    tableName: "customers",
  }
);

module.exports = Customer;