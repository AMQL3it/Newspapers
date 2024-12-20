const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Area = require("./../area/model");
const Product = require("./../product/model");

const Customer = sequelize.define(
  "Customer",
  {
    cus_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cus_room_no: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cus_name: {
      type: DataTypes.STRING,
    },
    cus_designation: {
      type: DataTypes.STRING,
    },
    cus_branch: {
        type: DataTypes.STRING,
    },
    cus_department: {
      type: DataTypes.STRING,
    },
    cus_products: {
      type: DataTypes.JSON,
    },
    cus_activity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: "customers",
  }
);

Customer.belongsTo(Area, { foreignKey: "area_id" });

module.exports = Customer;