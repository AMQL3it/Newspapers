const designationService = require("./service");
const logger = require("../../common/logger");

const designationController = {
  // Create a new Designation
  async create(req, res) {
    try {
      const designationData = req.body;
      const newDesignation = await designationService.createDesignation(designationData);
      res.status(201).json({
        status: "success",
        message: "Designation created successfully.",
        data: newDesignation,
      });
    } catch (error) {
      logger.error(`Error creating designation: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to create designation.",
        error: error.message,
      });
    }
  },

  // Get all Designations
  async getAll(req, res) {
    try {
      const designations = await designationService.getAllDesignations();
      res.status(200).json({
        status: "success",
        message: "Designations retrieved successfully.",
        data: designations,
      });
    } catch (error) {
      logger.error(`Error fetching designations: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve designations.",
        error: error.message,
      });
    }
  },

  // Get Designation by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const designation = await designationService.getDesignationById(id);
      if (designation) {
        res.status(200).json({
          status: "success",
          message: "Designation retrieved successfully.",
          data: designation,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No designation found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error fetching designation by ID: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve designation.",
        error: error.message,
      });
    }
  },

  // Update Designation by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const designationData = req.body;
      const updatedDesignation = await designationService.updateDesignation(id, designationData);

      if (updatedDesignation) {
        res.status(200).json({
          status: "success",
          message: "Designation updated successfully.",
          data: updatedDesignation,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No designation found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error updating designation: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to update designation.",
        error: error.message,
      });
    }
  },

  // Delete Designation by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedDesignation = await designationService.deleteDesignationById(id);

      if (deletedDesignation) {
        res.status(200).json({
          status: "success",
          message: "Designation deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No designation found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error deleting designation: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to delete designation.",
        error: error.message,
      });
    }
  },
};

module.exports = designationController;
