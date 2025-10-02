const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Branch = sequelize.define(
    "Branch", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        phone: { type: DataTypes.STRING, allowNull: false },
    },
    {
        tableName: "branches",
    }
);

module.exports = Branch;