const Designation = require("./model.js");

const designationRepository = {
  // Create a new Designation
  async create(data) {
    try {
      const newDesignation = await Designation.create(data);
      return newDesignation;
    } catch (error) {
      console.error("Error creating Designation:", error.message);
      throw error;
    }
  },

  // Get all Designations
  async getAll() {
    try {
      return await Designation.findAll();
    } catch (error) {
      console.error("Error fetching all Designations:", error.message);
      throw error;
    }
  },

  // Get Designation by ID
  async getById(id) {
    try {
      const designation = await Designation.findByPk(id);
      if (!designation) {
        throw new Error(`Designation with ID ${id} not found`);
      }
      return designation;
    } catch (error) {
      console.error("Error fetching Designation by ID:", error.message);
      throw error;
    }
  },

  // Get by Query
  async getByQuery(query) {
    try {
      const designation = await Designation.findOne({ where: query });
      if (!designation) {
        throw new Error(`No Designation found matching query: ${JSON.stringify(query)}`);
      }
      return designation;
    } catch (error) {
      console.error("Error fetching Designation by query:", error.message);
      throw error;
    }
  },

  // Get Designation by Query for multiple results
  async getAllByQuery(query) {
    try {
      return await Designation.findAll({ where: query });
    } catch (error) {
      console.error("Error fetching Designations by query:", error.message);
      throw error;
    }
  },

  // Update Designation by ID
  async update(id, data) {
    try {
      const designation = await Designation.findByPk(id);
      if (!designation) {
        throw new Error(`Designation with ID ${id} not found`);
      }
      return await designation.update(data);
    } catch (error) {
      console.error("Error updating Designation:", error.message);
      throw error;
    }
  },

  // Delete Designation by ID
  async delete(id) {
    try {
      const designation = await Designation.findByPk(id);
      if (!designation) {
        throw new Error(`Designation with ID ${id} not found`);
      }
      await designation.destroy();
      return true; // Return a success status
    } catch (error) {
      console.error("Error deleting Designation by ID:", error.message);
      throw error;
    }
  },

  // Delete Designation by Query
  async deleteByQuery(query) {
    try {
      const deletedCount = await Designation.destroy({ where: query });
      if (deletedCount === 0) {
        throw new Error(`No Designations found matching query: ${JSON.stringify(query)}`);
      }
      return deletedCount;
    } catch (error) {
      console.error("Error deleting Designations by query:", error.message);
      throw error;
    }
  },

  // Delete all Designations
  async deleteAll() {
    try {
      return await Designation.destroy({ truncate: true });
    } catch (error) {
      console.error("Error deleting all Designations:", error.message);
      throw error;
    }
  },
};

module.exports = designationRepository;
