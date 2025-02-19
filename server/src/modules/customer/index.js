const express = require("express");
const customerController = require("./controller");
// const { customerValidator, customerDataFilterHandler } = require("./middleware");

const router = express.Router();

// Route definitions for Customer operations

// Create a new Customer
router.post(
  "/", 
//   customerValidator, // Validation middleware
//   customerDataFilterHandler, // Handles validation errors
  customerController.create
);

// Get all Customers
router.get("/", customerController.getAll);

// Get Customer by ID
router.get("/:id", customerController.getById);

// Get Customers by Query
// router.get("/query", customerController.getAllByQuery);

// Update Customer by ID
router.put(
  "/:id", 
  // customerValidator, // Validation middleware (if applicable for update)
  // customerDataFilterHandler, // Handles validation errors
  customerController.update
);

// Delete Customer by ID
router.delete("/:id", customerController.delete);

// Delete Customers by Query
// router.delete("/query", customerController.deleteByQuery);

// Delete all Customers
// router.delete("/all", customerController.deleteAll);

module.exports = router;
