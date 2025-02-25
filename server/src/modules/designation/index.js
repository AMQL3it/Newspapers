const express = require("express");
const designationController = require("./controller");
// const { designationValidator, designationDataFilterHandler } = require("./middleware");

const router = express.Router();

// Route definitions for Designation operations

// Create a new Designation
router.post(
  "/", 
  // designationValidator, // Validation middleware
  // designationDataFilterHandler, // Handles validation errors
  designationController.create
);

// Get all Designations
router.get("/", designationController.getAll);

// Get Designation by ID
router.get("/:id", designationController.getById);

// Get Designations by Query
// router.get("/query", designationController.getAllByQuery);

// Update Designation by ID
router.put(
  "/:id", 
  // designationValidator, // Validation middleware (if applicable for update)
  // designationDataFilterHandler, // Handles validation errors
  designationController.update
);

// Delete Designation by ID
router.delete("/:id", designationController.delete);

// Delete Designations by Query
// router.delete("/query", designationController.deleteByQuery);

// Delete all Designations
// router.delete("/all", designationController.deleteAll);

module.exports = router;
