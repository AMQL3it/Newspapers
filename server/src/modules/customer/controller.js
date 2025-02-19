const customerService = require("./service");
const logger = require("../../common/logger");

const customerController = {
  // Create a new Customer
  async create(req, res) {
    try {
      const customerData = req.body;
      const newCustomer = await customerService.createCustomer(customerData);
      res.status(201).json({
        status: "success",
        message: "Customer created successfully.",
        data: newCustomer,
      });
    } catch (error) {
      logger.error(`Error creating customer: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to create customer.",
        error: error.message,
      });
    }
  },

  // Get all Customers
  async getAll(req, res) {
    try {
      const customers = await customerService.getAllCustomers();
      res.status(200).json({
        status: "success",
        message: "Customers retrieved successfully.",
        data: customers,
      });
    } catch (error) {
      logger.error(`Error fetching customers: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve customers.",
        error: error.message,
      });
    }
  },

  // Get Customer by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const customer = await customerService.getCustomerById(id);
      if (customer) {
        res.status(200).json({
          status: "success",
          message: "Customer retrieved successfully.",
          data: customer,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No customer found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error fetching customer by ID: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve customer.",
        error: error.message,
      });
    }
  },

  // Update Customer by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const customerData = req.body;
      const updatedCustomer = await customerService.updateCustomer(id, customerData);

      if (updatedCustomer) {
        res.status(200).json({
          status: "success",
          message: "Customer updated successfully.",
          data: updatedCustomer,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No customer found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error updating customer: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to update customer.",
        error: error.message,
      });
    }
  },

  // Delete Customer by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedCustomer = await customerService.deleteCustomerById(id);

      if (deletedCustomer) {
        res.status(200).json({
          status: "success",
          message: "Customer deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No customer found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error deleting customer: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to delete customer.",
        error: error.message,
      });
    }
  },
};

module.exports = customerController;
