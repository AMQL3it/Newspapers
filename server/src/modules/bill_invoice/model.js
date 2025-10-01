const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const BillInvoice = sequelize.define(
    "BillInvoice",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        month: { type: DataTypes.STRING, allowNull: false },
        year: { type: DataTypes.STRING, allowNull: false },
        amount: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
        tableName: "billInvoices",
    }
);

module.exports = BillInvoice;