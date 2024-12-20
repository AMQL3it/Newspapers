// controllers/customerController.js
const customerService = require("./service");

const customerController = {
  async getCustomer(req, res, next) {
    try {
      const customer = await customerService.getCustomerById(req.params.id);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },

  async getAllCustomers(req, res, next) {
    try {
      const customers = await customerService.getAllCustomers();
      res.status(200).json(customers);
    } catch (error) {
      next(error);
    }
  },

  async createCustomer(req, res, next) {
    try {
      const customer = await customerService.createCustomer(req.body);
      res.status(201).json(customer);
    } catch (error) {
      next(error);
    }
  },

  async updateCustomer(req, res, next) {
    try {
      const customer = await customerService.updateCustomer(req.params.id, req.body);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },

  async deleteCustomer(req, res, next) {
    try {
      await customerService.deleteCustomer(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  async addProducts(req, res, next) {
    try {
      const { productIds } = req.body;
      const result = await customerService.addProductsToCustomer(req.params.id, productIds);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  async removeProducts(req, res, next) {
    try {
      const { productIds } = req.body;
      const result = await customerService.removeProductsFromCustomer(req.params.id, productIds);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = customerController;
