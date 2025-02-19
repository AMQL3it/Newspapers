const express = require("express");
const departmentController = require("./controller");
// const { departmentValidator, departmentDataFilterHandler } = require("./middleware");

const router = express.Router();

// Route definitions for Department operations

// Create a new Department
router.post(
  "/", 
  // departmentValidator, // Validation middleware
  // departmentDataFilterHandler, // Handles validation errors
  departmentController.create
);

// Get all Departments
router.get("/", departmentController.getAll);

// Get Department by ID
router.get("/:id", departmentController.getById);

// Get Departments by Query
// router.get("/query", departmentController.getAllByQuery);

// Update Department by ID
router.put(
  "/:id", 
  // departmentValidator, // Validation middleware (if applicable for update)
  // departmentDataFilterHandler, // Handles validation errors
  departmentController.update
);

// Delete Department by ID
router.delete("/:id", departmentController.delete);

// Delete Departments by Query
// router.delete("/query", departmentController.deleteByQuery);

// Delete all Departments
// router.delete("/all", departmentController.deleteAll);

module.exports = router;
