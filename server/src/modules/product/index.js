const express = require("express");
const productController = require("./controller");
// const { productValidator, productDataFilterHandler } = require("./middleware");

const router = express.Router();

// Route definitions for Product operations

// Create a new Product
router.post(
  "/", 
//   productValidator, // Validation middleware
//   productDataFilterHandler, // Handles validation errors
  productController.create
);

// Get all Products
router.get("/", productController.getAll);

// Get Product by ID
router.get("/:id", productController.getById);

// Get Products by Query
// router.get("/query", productController.getAllByQuery);

// Update Product by ID
router.put(
  "/:id", 
  // productValidator, // Validation middleware (if applicable for update)
  // productDataFilterHandler, // Handles validation errors
  productController.update
);

// Delete Product by ID
router.delete("/:id", productController.delete);

// Delete Products by Query
// router.delete("/query", productController.deleteByQuery);

// Delete all Products
// router.delete("/all", productController.deleteAll);

module.exports = router;
