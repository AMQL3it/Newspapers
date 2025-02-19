const Area = require("../area/model.js");
const Department = require("./model.js");

const departmentRepository = {
  // Create a new Department
  async create(data) {
    try {
      const newDepartment = await Department.create(data);
      return newDepartment;
    } catch (error) {
      console.error("Error creating Department:", error.message);
      throw error;
    }
  },

  // Get all Departments
  async getAll() {
    try {
      return await Department.findAll({
        include: Area,
      });
    } catch (error) {
      console.error("Error fetching all Departments:", error.message);
      throw error;
    }
  },

  // Get Department by ID
  async getById(id) {
    try {
      const department = await Department.findByPk(
        id, {
          include: Area,
        }
      );
      if (!department) {
        throw new Error(`Department with ID ${id} not found`);
      }
      return department;
    } catch (error) {
      console.error("Error fetching Department by ID:", error.message);
      throw error;
    }
  },

  // Get by Query
  async getByQuery(query) {
    try {
      const department = await Department.findOne({ where: query });
      if (!department) {
        throw new Error(`No Department found matching query: ${JSON.stringify(query)}`);
      }
      return department;
    } catch (error) {
      console.error("Error fetching Department by query:", error.message);
      throw error;
    }
  },

  // Get Department by Query for multiple results
  async getAllByQuery(query) {
    try {
      return await Department.findAll({ where: query });
    } catch (error) {
      console.error("Error fetching Departments by query:", error.message);
      throw error;
    }
  },

  // Update Department by ID
  async update(id, data) {
    try {
      const department = await Department.findByPk(id);
      if (!department) {
        throw new Error(`Department with ID ${id} not found`);
      }
      return await department.update(data);
    } catch (error) {
      console.error("Error updating Department:", error.message);
      throw error;
    }
  },

  // Delete Department by ID
  async delete(id) {
    try {
      const department = await Department.findByPk(id);
      if (!department) {
        throw new Error(`Department with ID ${id} not found`);
      }
      await department.destroy();
      return true; // Return a success status
    } catch (error) {
      console.error("Error deleting Department by ID:", error.message);
      throw error;
    }
  },

  // Delete Department by Query
  async deleteByQuery(query) {
    try {
      const deletedCount = await Department.destroy({ where: query });
      if (deletedCount === 0) {
        throw new Error(`No Departments found matching query: ${JSON.stringify(query)}`);
      }
      return deletedCount;
    } catch (error) {
      console.error("Error deleting Departments by query:", error.message);
      throw error;
    }
  },

  // Delete all Departments
  async deleteAll() {
    try {
      return await Department.destroy({ truncate: true });
    } catch (error) {
      console.error("Error deleting all Departments:", error.message);
      throw error;
    }
  },
};

module.exports = departmentRepository;
