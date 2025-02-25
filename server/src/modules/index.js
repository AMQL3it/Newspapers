const areas = require("./area");
const departments = require("./department");
const products = require("./product");
const customers = require("./customer");
const deliveries = require("./delivery");
const designations = require("./designation");
const bills = require("./bill");

const api = {
    "areas": areas,
    "departments": departments,
    "products": products,
    "customers": customers,
    "deliveries": deliveries,
    "designations": designations,
    "bills": bills
}

// build a api list and router call it here by suffix
const initRoutes = (app) => {
    for (const [key, value] of Object.entries(api)) {
        app.use(`/${key}`, value);
    }
}

module.exports = initRoutes;

