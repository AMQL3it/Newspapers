const setupAssociations = (Models) => {
     // Area and Department
    Models.Area.hasMany(Models.Department, { foreignKey: 'area_id' });
    Models.Department.belongsTo(Models.Area, { foreignKey: 'area_id' });

    // Designation and Customer
    Models.Designation.hasMany(Models.Customer, { foreignKey: 'des_id' });
    Models.Customer.belongsTo(Models.Designation, { foreignKey: 'des_id' });

    // Customer and Product (Many-to-Many)
    Models.Customer.belongsToMany(Models.Product, { through: 'customer_products' });
    Models.Product.belongsToMany(Models.Customer, { through: 'customer_products' });

    // Customer and Delivery (One-to-Many)
    Models.Customer.hasMany(Models.Delivery, { foreignKey: 'cus_id' });
    Models.Delivery.belongsTo(Models.Customer, { foreignKey: 'cus_id' });

    // Customer and Bill
    Models.Customer.hasMany(Models.Bill, { foreignKey: 'cus_id' });
    Models.Bill.belongsTo(Models.Customer, { foreignKey: 'cus_id' });
};
  
module.exports = setupAssociations;