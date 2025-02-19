const departmentRepository = require("./repository");

const departmentService = {
  // Create a new Department
  async createDepartment(data) {
    try {
      if (!data.name) {
        throw new Error("Name is required to create an Department");
      }
      const department = await departmentRepository.create(data);
      return department;
    } catch (error) {
      console.error("Error in createDepartment:", error.message);
      throw error;
    }
  },

  // Get all Departments
  async getAllDepartments() {
    try {
      const departments = await departmentRepository.getAll();
      return departments;
    } catch (error) {
      console.error("Error in getAllDepartments:", error.message);
      throw error;
    }
  },

  // Get Department by ID
  async getDepartmentById(id) {
    try {
      if (!id) {
        throw new Error("Department ID is required to fetch the Department");
      }
      const department = await departmentRepository.getById(id);
      return department;
    } catch (error) {
      console.error("Error in getDepartmentById:", error.message);
      throw error;
    }
  },

  // Get Departments by query
  async getDepartmentsByQuery(query) {
    try {
      const departments = await departmentRepository.getAllByQuery(query);
      return departments;
    } catch (error) {
      console.error("Error in getDepartmentsByQuery:", error.message);
      throw error;
    }
  },

  // Update Department by ID
  async updateDepartment(id, data) {
    try {
      if (!id) {
        throw new Error("Department ID is required to update the Department");
      }
      if (!data) {
        throw new Error("Update data is required to update the Department");
      }
      const updatedDepartment = await departmentRepository.update(id, data);
      if (!updatedDepartment) {
        throw new Error(`Department with ID ${id} not found for update`);
      }
      return updatedDepartment;
    } catch (error) {
      console.error("Error in updateDepartment:", error.message);
      throw error;
    }
  },

  // Delete Department by ID
  async deleteDepartmentById(id) {
    try {
      if (!id) {
        throw new Error("Department ID is required to delete the Department");
      }
      const result = await departmentRepository.delete(id);
      if (!result) {
        throw new Error(`Department with ID ${id} not found for deletion`);
      }
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteDepartmentById:", error.message);
      throw error;
    }
  },

  // Delete Departments by Query
  async deleteDepartmentsByQuery(query) {
    try {
      const deletedCount = await departmentRepository.deleteByQuery(query);
      return deletedCount; // Return the number of deleted rows
    } catch (error) {
      console.error("Error in deleteDepartmentsByQuery:", error.message);
      throw error;
    }
  },

  // Delete all Departments
  async deleteAllDepartments() {
    try {
      await departmentRepository.deleteAll();
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteAllDepartments:", error.message);
      throw error;
    }
  },
};

module.exports = departmentService;
