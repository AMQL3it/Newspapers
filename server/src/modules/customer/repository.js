const Customer = require("./model.js");

const customerRepository = {
  // Create a new Customer
  async create(data) {
    try {
      const newCustomer = await Customer.create(data);
      return newCustomer;
    } catch (error) {
      console.error("Error creating Customer:", error.message);
      throw error;
    }
  },

  // Get all Customers
  async getAll() {
    try {
      return await Customer.findAll();
    } catch (error) {
      console.error("Error fetching all Customers:", error.message);
      throw error;
    }
  },

  // Get Customer by ID
  async getById(id) {
    try {
      const customer = await Customer.findByPk(id);
      if (!customer) {
        throw new Error(`Customer with ID ${id} not found`);
      }
      return customer;
    } catch (error) {
      console.error("Error fetching Customer by ID:", error.message);
      throw error;
    }
  },

  // Get by Query
  async getByQuery(query) {
    try {
      const customer = await Customer.findOne({ where: query });
      if (!customer) {
        throw new Error(`No Customer found matching query: ${JSON.stringify(query)}`);
      }
      return customer;
    } catch (error) {
      console.error("Error fetching Customer by query:", error.message);
      throw error;
    }
  },

  // Get Customer by Query for multiple results
  async getAllByQuery(query) {
    try {
      return await Customer.findAll({ where: query });
    } catch (error) {
      console.error("Error fetching Customers by query:", error.message);
      throw error;
    }
  },

  // Update Customer by ID
  async update(id, data) {
    try {
      const customer = await Customer.findByPk(id);
      if (!customer) {
        throw new Error(`Customer with ID ${id} not found`);
      }
      return await customer.update(data);
    } catch (error) {
      console.error("Error updating Customer:", error.message);
      throw error;
    }
  },

  // Delete Customer by ID
  async delete(id) {
    try {
      const customer = await Customer.findByPk(id);
      if (!customer) {
        throw new Error(`Customer with ID ${id} not found`);
      }
      await customer.destroy();
      return true; // Return a success status
    } catch (error) {
      console.error("Error deleting Customer by ID:", error.message);
      throw error;
    }
  },

  // Delete Customer by Query
  async deleteByQuery(query) {
    try {
      const deletedCount = await Customer.destroy({ where: query });
      if (deletedCount === 0) {
        throw new Error(`No Customers found matching query: ${JSON.stringify(query)}`);
      }
      return deletedCount;
    } catch (error) {
      console.error("Error deleting Customers by query:", error.message);
      throw error;
    }
  },

  // Delete all Customers
  async deleteAll() {
    try {
      return await Customer.destroy({ truncate: true });
    } catch (error) {
      console.error("Error deleting all Customers:", error.message);
      throw error;
    }
  },
};

module.exports = customerRepository;
