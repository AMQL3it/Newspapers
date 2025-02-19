const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Bill = sequelize.define(
    "Bill",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        month: { type: DataTypes.STRING, allowNull: false },
        product_details: { type: DataTypes.JSON, allowNull: false },
        amount: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
        tableName: "bills",
    }
);

module.exports = Bill;