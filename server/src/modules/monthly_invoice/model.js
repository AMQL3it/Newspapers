const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const MonthlyInvoice = sequelize.define(
    "MonthlyInvoice",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        month: { type: DataTypes.STRING, allowNull: false },
        year: { type: DataTypes.STRING, allowNull: false },
        total_amount: { type: DataTypes.FLOAT, allowNull: false },
        status: { type: DataTypes.ENUM('paid', 'unpaid'), allowNull: false, defaultValue: 'unpaid' },
        issue_date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        paid_date: { type: DataTypes.DATE, allowNull: false  },
        notes: { type: DataTypes.TEXT },
    },
    {
        tableName: "monthlyInvoices",
    }
);

module.exports = MonthlyInvoice;