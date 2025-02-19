const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Designation = sequelize.define(
    "Designation",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
    },
    {
        tableName: "designations",
    }
);

module.exports = Designation;