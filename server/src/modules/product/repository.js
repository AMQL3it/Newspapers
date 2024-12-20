// modules/products/productRepository.js
const Product = require("./model");

const productRepository = {
  async findById(productId) {
    return await Product.findByPk(productId);
  },

  async findAll() {
    return await Product.findAll();
  },

  async create(productData) {
    return await Product.create(productData);
  },

  async update(productId, productData) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error("Product not found");
    return await product.update(productData);
  },

  async delete(productId) {
    const product = await Product.findByPk(productId);
    if (!product) throw new Error("Product not found");
    await product.destroy();
  },
};

module.exports = productRepository;
