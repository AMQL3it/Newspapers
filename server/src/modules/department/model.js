const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Department = sequelize.define(
    "Department",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false, unique: true },
        vat_rate: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
        tax_rate: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
    },
    {
        tableName: "departments",
    }
);

module.exports = Department;