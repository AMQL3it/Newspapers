// repositories/customerRepository.js
const Customer = require("./model");
const Product = require("./../product/model");

const customerRepository = {
  async findById(customerId) {
    return await Customer.findByPk(customerId, {
      include: {
        model: Product,
        through: { attributes: [] }, // Exclude junction table data
      },
    });
  },

  async findAll() {
    return await Customer.findAll({
      include: {
        model: Product,
        through: { attributes: [] },
      },
    });
  },

  async create(customerData) {
    return await Customer.create(customerData);
  },

  async update(customerId, customerData) {
    const customer = await Customer.findByPk(customerId);
    if (!customer) throw new Error("Customer not found");
    return await customer.update(customerData);
  },

  async delete(customerId) {
    const customer = await Customer.findByPk(customerId);
    if (!customer) throw new Error("Customer not found");
    await customer.destroy();
  },

  async addProducts(customerId, productIds) {
    const customer = await Customer.findByPk(customerId);
    const products = await Product.findAll({ where: { product_id: productIds } });
    return await customer.addProducts(products);
  },

  async removeProducts(customerId, productIds) {
    const customer = await Customer.findByPk(customerId);
    const products = await Product.findAll({ where: { product_id: productIds } });
    return await customer.removeProducts(products);
  },
};

module.exports = customerRepository;
