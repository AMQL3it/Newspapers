const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Subscription = sequelize.define(
  "Subscription", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "subscriptions",
  }
);

module.exports = Subscription;