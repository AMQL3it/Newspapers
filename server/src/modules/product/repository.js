const Product = require("./model.js");

const productRepository = {
  // Create a new Product
  async create(data) {
    try {
      const newProduct = await Product.create(data);
      return newProduct;
    } catch (error) {
      console.error("Error creating Product:", error.message);
      throw error;
    }
  },

  // Get all Products
  async getAll() {
    try {
      return await Product.findAll();
    } catch (error) {
      console.error("Error fetching all Products:", error.message);
      throw error;
    }
  },

  // Get Product by ID
  async getById(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return product;
    } catch (error) {
      console.error("Error fetching Product by ID:", error.message);
      throw error;
    }
  },

  // Get by Query
  async getByQuery(query) {
    try {
      const product = await Product.findOne({ where: query });
      if (!product) {
        throw new Error(`No Product found matching query: ${JSON.stringify(query)}`);
      }
      return product;
    } catch (error) {
      console.error("Error fetching Product by query:", error.message);
      throw error;
    }
  },

  // Get Product by Query for multiple results
  async getAllByQuery(query) {
    try {
      return await Product.findAll({ where: query });
    } catch (error) {
      console.error("Error fetching Products by query:", error.message);
      throw error;
    }
  },

  // Update Product by ID
  async update(id, data) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return await product.update(data);
    } catch (error) {
      console.error("Error updating Product:", error.message);
      throw error;
    }
  },

  // Delete Product by ID
  async delete(id) {
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      await product.destroy();
      return true; // Return a success status
    } catch (error) {
      console.error("Error deleting Product by ID:", error.message);
      throw error;
    }
  },

  // Delete Product by Query
  async deleteByQuery(query) {
    try {
      const deletedCount = await Product.destroy({ where: query });
      if (deletedCount === 0) {
        throw new Error(`No Products found matching query: ${JSON.stringify(query)}`);
      }
      return deletedCount;
    } catch (error) {
      console.error("Error deleting Products by query:", error.message);
      throw error;
    }
  },

  // Delete all Products
  async deleteAll() {
    try {
      return await Product.destroy({ truncate: true });
    } catch (error) {
      console.error("Error deleting all Products:", error.message);
      throw error;
    }
  },
};

module.exports = productRepository;
