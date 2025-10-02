const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Delivery = sequelize.define(
    "Delivery", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        status: { type: DataTypes.ENUM("pending", "delivered", "cancelled"), defaultValue: "delivered", allowNull: false },
    },
    {
        tableName: "deliveries",
    }
);

module.exports = Delivery;