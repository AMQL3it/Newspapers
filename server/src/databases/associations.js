const setupAssociations = (Models) => {
    // Supplier <-> Product (Many-to-Many)
    Models.Supplier.belongsToMany(Models.Product, {
        through: Models.SupplierProduct,
        foreignKey: "supplier_id",
        otherKey: "product_id",
        as: "products",
    });
    Models.Product.belongsToMany(Models.Supplier, {
        through: Models.SupplierProduct,
        foreignKey: "product_id",
        otherKey: "supplier_id",
        as: "suppliers",
    });

    // SupplierOrder and SupplierProduct (Many-to-One)
    Models.SupplierProduct.hasMany(Models.SupplierOrder, { foreignKey: "supplier_product_id", as: "orders" });
    Models.SupplierOrder.belongsTo(Models.SupplierProduct, { foreignKey: "supplier_product_id", as: "product" });

    // DeliveryManifest and SupplierOrder (One-to-Many)
    Models.DeliveryManifest.hasMany(Models.SupplierOrder, { foreignKey: "manifest_id", as: "orders" });
    Models.SupplierOrder.belongsTo(Models.DeliveryManifest, { foreignKey: "manifest_id", as: "manifest" });

    // SupplierOrder and SupplierInvoice (One-to-one)
    Models.SupplierOrder.hasOne(Models.SupplierInvoice, { foreignKey: "supplier_order_id", as: "invoice" });
    Models.SupplierInvoice.belongsTo(Models.SupplierOrder, { foreignKey: "supplier_order_id", as: "order" });

    // Area and Department (One-to-Many)
    Models.Area.hasMany(Models.Department, { foreignKey: 'area_id', as: "departments" });
    Models.Department.belongsTo(Models.Area, { foreignKey: 'area_id', as: "area" });

    // Designation and Customer
    Models.Designation.hasMany(Models.Customer, { foreignKey: 'designation_id', as: "customers" });
    Models.Customer.belongsTo(Models.Designation, { foreignKey: 'designation_id', as: "designation" });

    // Branch and Customer
    Models.Branch.hasMany(Models.Customer, { foreignKey: 'branch_id', as: "customers" });
    Models.Customer.belongsTo(Models.Branch, { foreignKey: 'branch_id', as: "branch" });

    // Department and Customer
    Models.Department.hasMany(Models.Customer, { foreignKey: 'department_id', as: "customers" });
    Models.Customer.belongsTo(Models.Department, { foreignKey: 'department_id', as: "department" });

    // Customer -> Subscriptions (One-to-Many)
    Models.Customer.hasMany(Models.Subscription, { foreignKey: 'cus_id', as: "subscriptions" });
    Models.Subscription.belongsTo(Models.Customer, { foreignKey: 'cus_id', as: "customer" });

    // Product -> subscriptions (One-to-Many)
    Models.Product.hasMany(Models.Subscription, { foreignKey: 'product_id', as: "subscriptions" });
    Models.Subscription.belongsTo(Models.Product, { foreignKey: 'product_id', as: "product" });

    // Subscription -> Deliveries (One-to-Many)
    Models.Subscription.hasMany(Models.Delivery, { foreignKey: 'subscription_id', as: "deliveries" });
    Models.Delivery.belongsTo(Models.Subscription, { foreignKey: 'subscription_id', as: "subscription" });

    // DeliveryManifest -> Deliveries (One-to-Many)
    Models.DeliveryManifest.hasMany(Models.Delivery, { foreignKey: 'manifest_id', as: "deliveries" });
    Models.Delivery.belongsTo(Models.DeliveryManifest, { foreignKey: 'manifest_id', as: "manifest" });

    // Customer and BillInvoice (One-to-Many)
    Models.Customer.hasMany(Models.BillInvoice, { foreignKey: 'customer_id', as: "invoices" });
    Models.BillInvoice.belongsTo(Models.Customer, { foreignKey: 'customer_id', as: "customer" });

    // department and MonthlyInvoice (One-to-Many)
    Models.Department.hasMany(Models.MonthlyInvoice, { foreignKey: 'department_id', as: "invoices" });
    Models.MonthlyInvoice.belongsTo(Models.Department, { foreignKey: 'department_id', as: "department" });
};
  
module.exports = setupAssociations;