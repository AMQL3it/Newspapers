const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");

const Area = sequelize.define(
  "Area",
  {
    area_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    area_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true,
    },
    area_phone: {
      type: DataTypes.STRING,
    },
    area_address: {
      type: DataTypes.STRING,
      trim: true,
    },
  },
  {
    tableName: "areas",
  }
);

module.exports = Area;