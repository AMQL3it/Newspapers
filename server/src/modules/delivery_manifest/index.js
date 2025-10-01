const express = require("express");
const deliveryController = require("./controller");
// const { deliveryValidator, deliveryDataFilterHandler } = require("./middleware");

const router = express.Router();

// Route definitions for Delivery operations

// Create a new Delivery
router.post(
  "/", 
  // deliveryValidator, // Validation middleware
  // deliveryDataFilterHandler, // Handles validation errors
  deliveryController.create
);

// Get all Deliverys
router.get("/", deliveryController.getAll);

// Get Delivery by ID
router.get("/:id", deliveryController.getById);

// Get Deliverys by Query
// router.get("/query", deliveryController.getAllByQuery);

// Update Delivery by ID
router.put(
  "/:id", 
  // deliveryValidator, // Validation middleware (if applicable for update)
  // deliveryDataFilterHandler, // Handles validation errors
  deliveryController.update
);

// Delete Delivery by ID
router.delete("/:id", deliveryController.delete);

// Delete Deliverys by Query
// router.delete("/query", deliveryController.deleteByQuery);

// Delete all Deliverys
// router.delete("/all", deliveryController.deleteAll);

module.exports = router;
