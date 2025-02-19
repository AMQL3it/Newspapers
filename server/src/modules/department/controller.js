const departmentService = require("./service");
const logger = require("../../common/logger");

const departmentController = {
  // Create a new Department
  async create(req, res) {
    try {
      const departmentData = req.body;
      const newDepartment = await departmentService.createDepartment(departmentData);
      logger.info(`Department created: ${newDepartment.name}`);
      res.status(201).json({
        status: "success",
        message: "Department created successfully.",
        data: newDepartment,
      });
    } catch (error) {
      logger.error(`Error creating department: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to create department.",
        error: error.message,
      });
    }
  },

  // Get all Departments
  async getAll(req, res) {
    try {
      const departments = await departmentService.getAllDepartments();
      res.status(200).json({
        status: "success",
        message: "Departments retrieved successfully.",
        data: departments,
      });
    } catch (error) {
      logger.error(`Error fetching departments: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve departments.",
        error: error.message,
      });
    }
  },

  // Get Department by ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const department = await departmentService.getDepartmentById(id);
      if (department) {
        res.status(200).json({
          status: "success",
          message: "Department retrieved successfully.",
          data: department,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No department found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error fetching department by ID: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to retrieve department.",
        error: error.message,
      });
    }
  },

  // Update Department by ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const departmentData = req.body;
      const updatedDepartment = await departmentService.updateDepartment(id, departmentData);

      if (updatedDepartment) {
        logger.info(`Department updated: ${updatedDepartment.name}`);
        res.status(200).json({
          status: "success",
          message: "Department updated successfully.",
          data: updatedDepartment,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No department found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error updating department: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to update department.",
        error: error.message,
      });
    }
  },

  // Delete Department by ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedDepartment = await departmentService.deleteDepartmentById(id);

      if (deletedDepartment) {
        logger.info(`Department deleted: ${deletedDepartment.name}`);
        res.status(200).json({
          status: "success",
          message: "Department deleted successfully.",
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `No department found with ID: ${id}`,
        });
      }
    } catch (error) {
      logger.error(`Error deleting department: ${error.message}`);
      res.status(500).json({
        status: "error",
        message: "Failed to delete department.",
        error: error.message,
      });
    }
  },
};

module.exports = departmentController;
