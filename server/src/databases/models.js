const Models = {
    Area: require("../modules/area/model"),
    Product: require("../modules/product/model"),
    Supplier: require("../modules/supplier/model"),
    SupplierProduct: require("../modules/supplierProduct/model"),
    DeliveryManifest: require("../modules/delivery_manifest/model"),
    SupplierOrder: require("../modules/supplier_order/model"),
    SupplierInvoice: require("../modules/supplier_invoice/model"),
    Branch: require("../modules/branch/model"),
    Designation: require("../modules/designation/model"),
    Department: require("../modules/department/model"),
    Customer: require("../modules/customer/model"),
    Subscription: require("../modules/subscription/model"),
    Delivery: require("../modules/delivery/model"),
    BillInvoice: require("../modules/bill_invoice/model"),
    MonthlyInvoice: require("../modules/monthly_invoice/model"),
};

module.exports = Models;