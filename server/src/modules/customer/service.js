const customerRepository = require("./repository");

const customerService = {
  async getCustomerById(customerId) {
    const customer = await customerRepository.findById(customerId);
    if (!customer) throw new Error("Customer not found");
    return customer;
  },

  async getAllCustomers() {
    return await customerRepository.findAll();
  },

  async createCustomer(customerData) {
    return await customerRepository.create(customerData);
  },

  async updateCustomer(customerId, customerData) {
    return await customerRepository.update(customerId, customerData);
  },

  async deleteCustomer(customerId) {
    await customerRepository.delete(customerId);
  },

  async addProductsToCustomer(customerId, productIds) {
    return await customerRepository.addProducts(customerId, productIds);
  },

  async removeProductsFromCustomer(customerId, productIds) {
    return await customerRepository.removeProducts(customerId, productIds);
  },
};

module.exports = customerService;
