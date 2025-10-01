const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Customer = sequelize.define(
  "Customer",{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    room_no: { type: DataTypes.STRING, allowNull: false, unique: true },
    designation_id: { type: DataTypes.INTEGER },
    branch_id: { type: DataTypes.INTEGER },
    area_id: { type: DataTypes.INTEGER },
    department_id: { type: DataTypes.INTEGER },
    is_active: { type: DataTypes.ENUM("active", "inactive"), allowNull: false, defaultValue: "active" },
  },
  {
    tableName: "customers",
  }
);

module.exports = Customer;