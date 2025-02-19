const productRepository = require("./repository");

const productService = {
  // Create a new Product
  async createProduct(data) {
    try {
      if (!data.name) {
        throw new Error("Name is required to create an Product");
      }
      const product = await productRepository.create(data);
      return product;
    } catch (error) {
      console.error("Error in createProduct:", error.message);
      throw error;
    }
  },

  // Get all Products
  async getAllProducts() {
    try {
      const products = await productRepository.getAll();
      return products;
    } catch (error) {
      console.error("Error in getAllProducts:", error.message);
      throw error;
    }
  },

  // Get Product by ID
  async getProductById(id) {
    try {
      if (!id) {
        throw new Error("Product ID is required to fetch the Product");
      }
      const product = await productRepository.getById(id);
      return product;
    } catch (error) {
      console.error("Error in getProductById:", error.message);
      throw error;
    }
  },

  // Get Products by query
  async getProductsByQuery(query) {
    try {
      const products = await productRepository.getAllByQuery(query);
      return products;
    } catch (error) {
      console.error("Error in getProductsByQuery:", error.message);
      throw error;
    }
  },

  // Update Product by ID
  async updateProduct(id, data) {
    try {
      if (!id) {
        throw new Error("Product ID is required to update the Product");
      }
      if (!data) {
        throw new Error("Update data is required to update the Product");
      }
      const updatedProduct = await productRepository.update(id, data);
      if (!updatedProduct) {
        throw new Error(`Product with ID ${id} not found for update`);
      }
      return updatedProduct;
    } catch (error) {
      console.error("Error in updateProduct:", error.message);
      throw error;
    }
  },

  // Delete Product by ID
  async deleteProductById(id) {
    try {
      if (!id) {
        throw new Error("Product ID is required to delete the Product");
      }
      const result = await productRepository.delete(id);
      if (!result) {
        throw new Error(`Product with ID ${id} not found for deletion`);
      }
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteProductById:", error.message);
      throw error;
    }
  },

  // Delete Products by Query
  async deleteProductsByQuery(query) {
    try {
      const deletedCount = await productRepository.deleteByQuery(query);
      return deletedCount; // Return the number of deleted rows
    } catch (error) {
      console.error("Error in deleteProductsByQuery:", error.message);
      throw error;
    }
  },

  // Delete all Products
  async deleteAllProducts() {
    try {
      await productRepository.deleteAll();
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteAllProducts:", error.message);
      throw error;
    }
  },
};

module.exports = productService;
