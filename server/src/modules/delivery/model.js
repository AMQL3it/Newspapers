const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Delivery = sequelize.define(
    "Delivery", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        date: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
        tableName: "deliveries",
    }
);

module.exports = Delivery;