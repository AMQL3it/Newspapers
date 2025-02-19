const areas = require("./area");
const departments = require("./department");
const products = require("./product");
const customers = require("./customer");

const api = {
    "areas": areas,
    "departments": departments,
    "products": products,
    "customers": customers,

}

// build a api list and router call it here by suffix
const initRoutes = (app) => {
    for (const [key, value] of Object.entries(api)) {
        app.use(`/${key}`, value);
    }
}

module.exports = initRoutes;

