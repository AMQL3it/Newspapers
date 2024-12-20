// routes/customerRouter.js
const express = require("express");
const customerController = require("./controller");

const router = express.Router();

router.get("/:id", customerController.getCustomer);
router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);
router.post("/:id/products", customerController.addProducts);
router.delete("/:id/products", customerController.removeProducts);

module.exports = router;
