const deliveryService = require("./service");
const logger = require("../../common/logger");

const deliveryController = {
  // Create a new Delivery
  async create(req, res) {
    try {
      const deliveryData = req.body;
      const newDelivery = await deliveryService.createDelivery(deliveryData);
      res.status(201).json({
        status: "success",
        message: "Delivery created successfully.",
        data: newDelivery,
      });
    } catch (error) {
      logger.error(`Error creating delivery: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to create delivery.",
        error: error.message,
      });
    }
  },

  // Get all Deliverys
  async getAll(req, res) {
    try {
      const deliverys = await deliveryService.getAllDeliverys();
      res.status(200).json({
        status: "success",
        message: "Deliverys retrieved successfully.",
        data: deliverys,
      });
    } catch (error) {
      logger.error(`Error fetching deliverys: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve deliverys.",
        error: error.message,
      });
    }
  },

  // Get Delivery by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const delivery = await deliveryService.getDeliveryById(id);
      if (delivery) {
        res.status(200).json({
          status: "success",
          message: "Delivery retrieved successfully.",
          data: delivery,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No delivery found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error fetching delivery by ID: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve delivery.",
        error: error.message,
      });
    }
  },

  // Update Delivery by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const deliveryData = req.body;
      const updatedDelivery = await deliveryService.updateDelivery(id, deliveryData);

      if (updatedDelivery) {
        res.status(200).json({
          status: "success",
          message: "Delivery updated successfully.",
          data: updatedDelivery,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No delivery found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error updating delivery: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to update delivery.",
        error: error.message,
      });
    }
  },

  // Delete Delivery by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedDelivery = await deliveryService.deleteDeliveryById(id);

      if (deletedDelivery) {
        res.status(200).json({
          status: "success",
          message: "Delivery deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No delivery found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error deleting delivery: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to delete delivery.",
        error: error.message,
      });
    }
  },
};

module.exports = deliveryController;
