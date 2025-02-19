const productService = require("./service");
const logger = require("../../common/logger");

const productController = {
  // Create a new Product
  async create(req, res) {
    try {
      const productData = req.body;
      const newProduct = await productService.createProduct(productData);
      res.status(201).json({
        status: "success",
        message: "Product created successfully.",
        data: newProduct,
      });
    } catch (error) {
      logger.error(`Error creating product: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to create product.",
        error: error.message,
      });
    }
  },

  // Get all Products
  async getAll(req, res) {
    try {
      const products = await productService.getAllProducts();
      res.status(200).json({
        status: "success",
        message: "Products retrieved successfully.",
        data: products,
      });
    } catch (error) {
      logger.error(`Error fetching products: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve products.",
        error: error.message,
      });
    }
  },

  // Get Product by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(id);
      if (product) {
        res.status(200).json({
          status: "success",
          message: "Product retrieved successfully.",
          data: product,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No product found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error fetching product by ID: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve product.",
        error: error.message,
      });
    }
  },

  // Update Product by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const productData = req.body;
      const updatedProduct = await productService.updateProduct(id, productData);

      if (updatedProduct) {
        res.status(200).json({
          status: "success",
          message: "Product updated successfully.",
          data: updatedProduct,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No product found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error updating product: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to update product.",
        error: error.message,
      });
    }
  },

  // Delete Product by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedProduct = await productService.deleteProductById(id);

      if (deletedProduct) {
        res.status(200).json({
          status: "success",
          message: "Product deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No product found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error deleting product: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to delete product.",
        error: error.message,
      });
    }
  },
};

module.exports = productController;
