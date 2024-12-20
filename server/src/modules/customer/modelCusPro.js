const { DataTypes } = require("sequelize");
const sequelize = require("../../databases/config");
const Customer = require("./model");
const Product = require("./../product/model");

const CustomerProducts = sequelize.define(
    "CustomerProducts",
    {
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Customer,
          key: "cus_id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "product_id",
        },
      },
    },
    {
      tableName: "customerproducts",
      timestamps: false, // Disable createdAt/updatedAt if not needed
    }
  );
  
  Customer.belongsToMany(Product, { through: CustomerProducts, foreignKey: "customer_id" });
  Product.belongsToMany(Customer, { through: CustomerProducts, foreignKey: "product_id" });
  
  module.exports = CustomerProducts;