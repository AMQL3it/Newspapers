const express = require("express");
const billController = require("./controller");
// const { billValidator, billDataFilterHandler } = require("./middleware");

const router = express.Router();

// Route definitions for Bill operations

// Create a new Bill
router.post(
  "/", 
  // billValidator, // Validation middleware
  // billDataFilterHandler, // Handles validation errors
  billController.create
);

// Get all Bills
router.get("/", billController.getAll);

// Get Bill by ID
router.get("/:id", billController.getById);

// Get Bills by Query
// router.get("/query", billController.getAllByQuery);

// Update Bill by ID
router.put(
  "/:id", 
  // billValidator, // Validation middleware (if applicable for update)
  // billDataFilterHandler, // Handles validation errors
  billController.update
);

// Delete Bill by ID
router.delete("/:id", billController.delete);

// Delete Bills by Query
// router.delete("/query", billController.deleteByQuery);

// Delete all Bills
// router.delete("/all", billController.deleteAll);

module.exports = router;
