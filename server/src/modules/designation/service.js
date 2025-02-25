const designationRepository = require("./repository");

const designationService = {
  // Create a new Designation
  async createDesignation(data) {
    try {
      if (!data.name) {
        throw new Error("Name is required to create an Designation");
      }
      const designation = await designationRepository.create(data);
      return designation;
    } catch (error) {
      console.error("Error in createDesignation:", error.message);
      throw error;
    }
  },

  // Get all Designations
  async getAllDesignations() {
    try {
      const designations = await designationRepository.getAll();
      return designations;
    } catch (error) {
      console.error("Error in getAllDesignations:", error.message);
      throw error;
    }
  },

  // Get Designation by ID
  async getDesignationById(id) {
    try {
      if (!id) {
        throw new Error("Designation ID is required to fetch the Designation");
      }
      const designation = await designationRepository.getById(id);
      return designation;
    } catch (error) {
      console.error("Error in getDesignationById:", error.message);
      throw error;
    }
  },

  // Get Designations by query
  async getDesignationsByQuery(query) {
    try {
      const designations = await designationRepository.getAllByQuery(query);
      return designations;
    } catch (error) {
      console.error("Error in getDesignationsByQuery:", error.message);
      throw error;
    }
  },

  // Update Designation by ID
  async updateDesignation(id, data) {
    try {
      if (!id) {
        throw new Error("Designation ID is required to update the Designation");
      }
      if (!data) {
        throw new Error("Update data is required to update the Designation");
      }
      const updatedDesignation = await designationRepository.update(id, data);
      if (!updatedDesignation) {
        throw new Error(`Designation with ID ${id} not found for update`);
      }
      return updatedDesignation;
    } catch (error) {
      console.error("Error in updateDesignation:", error.message);
      throw error;
    }
  },

  // Delete Designation by ID
  async deleteDesignationById(id) {
    try {
      if (!id) {
        throw new Error("Designation ID is required to delete the Designation");
      }
      const result = await designationRepository.delete(id);
      if (!result) {
        throw new Error(`Designation with ID ${id} not found for deletion`);
      }
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteDesignationById:", error.message);
      throw error;
    }
  },

  // Delete Designations by Query
  async deleteDesignationsByQuery(query) {
    try {
      const deletedCount = await designationRepository.deleteByQuery(query);
      return deletedCount; // Return the number of deleted rows
    } catch (error) {
      console.error("Error in deleteDesignationsByQuery:", error.message);
      throw error;
    }
  },

  // Delete all Designations
  async deleteAllDesignations() {
    try {
      await designationRepository.deleteAll();
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteAllDesignations:", error.message);
      throw error;
    }
  },
};

module.exports = designationService;
