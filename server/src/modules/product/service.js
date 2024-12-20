// modules/products/productService.js
const productRepository = require("./repository");

const productService = {
  async getProductById(productId) {
    const product = await productRepository.findById(productId);
    if (!product) throw new Error("Product not found");
    return product;
  },

  async getAllProducts() {
    return await productRepository.findAll();
  },

  async createProduct(productData) {
    return await productRepository.create(productData);
  },

  async updateProduct(productId, productData) {
    return await productRepository.update(productId, productData);
  },

  async deleteProduct(productId) {
    await productRepository.delete(productId);
  },
};

module.exports = productService;
