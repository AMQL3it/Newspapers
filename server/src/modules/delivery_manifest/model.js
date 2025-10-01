const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const DeliveryManifest = sequelize.define(
    "DeliveryManifest", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        date: { type: DataTypes.DATEONLY, allowNull: false },
        note: { type: DataTypes.TEXT },
    },
    {
        tableName: "deliveryManifests",
    }
);

module.exports = DeliveryManifest;