const areas = require("./area");
const products = require("./product");
const customers = require("./customer");

const api = {
    "areas": areas,
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

