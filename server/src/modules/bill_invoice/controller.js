const billService = require("./service");
const logger = require("../../common/logger");

const billController = {
  // Create a new Bill
  async create(req, res) {
    try {
      const billData = req.body;
      const newBill = await billService.createBill(billData);
      res.status(201).json({
        status: "success",
        message: "Bill created successfully.",
        data: newBill,
      });
    } catch (error) {
      logger.error(`Error creating bill: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to create bill.",
        error: error.message,
      });
    }
  },

  // Get all Bills
  async getAll(req, res) {
    try {
      const bills = await billService.getAllBills();
      res.status(200).json({
        status: "success",
        message: "Bills retrieved successfully.",
        data: bills,
      });
    } catch (error) {
      logger.error(`Error fetching bills: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve bills.",
        error: error.message,
      });
    }
  },

  // Get Bill by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const bill = await billService.getBillById(id);
      if (bill) {
        res.status(200).json({
          status: "success",
          message: "Bill retrieved successfully.",
          data: bill,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No bill found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error fetching bill by ID: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve bill.",
        error: error.message,
      });
    }
  },

  // Update Bill by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const billData = req.body;
      const updatedBill = await billService.updateBill(id, billData);

      if (updatedBill) {
        res.status(200).json({
          status: "success",
          message: "Bill updated successfully.",
          data: updatedBill,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No bill found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error updating bill: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to update bill.",
        error: error.message,
      });
    }
  },

  // Delete Bill by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedBill = await billService.deleteBillById(id);

      if (deletedBill) {
        res.status(200).json({
          status: "success",
          message: "Bill deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No bill found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error deleting bill: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to delete bill.",
        error: error.message,
      });
    }
  },
};

module.exports = billController;
