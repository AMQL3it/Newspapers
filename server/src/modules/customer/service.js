const customerRepository = require("./repository");

const customerService = {
  // Create a new Customer
  async createCustomer(data) {
    try {
      if (!data.name) {
        throw new Error("Name is required to create an Customer");
      }
      const customer = await customerRepository.create(data);
      return customer;
    } catch (error) {
      console.error("Error in createCustomer:", error.message);
      throw error;
    }
  },

  // Get all Customers
  async getAllCustomers() {
    try {
      const customers = await customerRepository.getAll();
      return customers;
    } catch (error) {
      console.error("Error in getAllCustomers:", error.message);
      throw error;
    }
  },

  // Get Customer by ID
  async getCustomerById(id) {
    try {
      if (!id) {
        throw new Error("Customer ID is required to fetch the Customer");
      }
      const customer = await customerRepository.getById(id);
      return customer;
    } catch (error) {
      console.error("Error in getCustomerById:", error.message);
      throw error;
    }
  },

  // Get Customers by query
  async getCustomersByQuery(query) {
    try {
      const customers = await customerRepository.getAllByQuery(query);
      return customers;
    } catch (error) {
      console.error("Error in getCustomersByQuery:", error.message);
      throw error;
    }
  },

  // Update Customer by ID
  async updateCustomer(id, data) {
    try {
      if (!id) {
        throw new Error("Customer ID is required to update the Customer");
      }
      if (!data) {
        throw new Error("Update data is required to update the Customer");
      }
      const updatedCustomer = await customerRepository.update(id, data);
      if (!updatedCustomer) {
        throw new Error(`Customer with ID ${id} not found for update`);
      }
      return updatedCustomer;
    } catch (error) {
      console.error("Error in updateCustomer:", error.message);
      throw error;
    }
  },

  // Delete Customer by ID
  async deleteCustomerById(id) {
    try {
      if (!id) {
        throw new Error("Customer ID is required to delete the Customer");
      }
      const result = await customerRepository.delete(id);
      if (!result) {
        throw new Error(`Customer with ID ${id} not found for deletion`);
      }
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteCustomerById:", error.message);
      throw error;
    }
  },

  // Delete Customers by Query
  async deleteCustomersByQuery(query) {
    try {
      const deletedCount = await customerRepository.deleteByQuery(query);
      return deletedCount; // Return the number of deleted rows
    } catch (error) {
      console.error("Error in deleteCustomersByQuery:", error.message);
      throw error;
    }
  },

  // Delete all Customers
  async deleteAllCustomers() {
    try {
      await customerRepository.deleteAll();
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteAllCustomers:", error.message);
      throw error;
    }
  },
};

module.exports = customerService;
