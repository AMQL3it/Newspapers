const areaRepository = require("./repository");

const areaService = {
  // Create a new Delivery
  async createDelivery(data) {
    try {
      if (!data.name) {
        throw new Error("Name is required to create an Delivery");
      }
      const area = await areaRepository.create(data);
      return area;
    } catch (error) {
      console.error("Error in createDelivery:", error.message);
      throw error;
    }
  },

  // Get all Deliverys
  async getAllDeliverys() {
    try {
      const areas = await areaRepository.getAll();
      return areas;
    } catch (error) {
      console.error("Error in getAllDeliverys:", error.message);
      throw error;
    }
  },

  // Get Delivery by ID
  async getDeliveryById(id) {
    try {
      if (!id) {
        throw new Error("Delivery ID is required to fetch the Delivery");
      }
      const area = await areaRepository.getById(id);
      return area;
    } catch (error) {
      console.error("Error in getDeliveryById:", error.message);
      throw error;
    }
  },

  // Get Deliverys by query
  async getDeliverysByQuery(query) {
    try {
      const areas = await areaRepository.getAllByQuery(query);
      return areas;
    } catch (error) {
      console.error("Error in getDeliverysByQuery:", error.message);
      throw error;
    }
  },

  // Update Delivery by ID
  async updateDelivery(id, data) {
    try {
      if (!id) {
        throw new Error("Delivery ID is required to update the Delivery");
      }
      if (!data) {
        throw new Error("Update data is required to update the Delivery");
      }
      const updatedDelivery = await areaRepository.update(id, data);
      if (!updatedDelivery) {
        throw new Error(`Delivery with ID ${id} not found for update`);
      }
      return updatedDelivery;
    } catch (error) {
      console.error("Error in updateDelivery:", error.message);
      throw error;
    }
  },

  // Delete Delivery by ID
  async deleteDeliveryById(id) {
    try {
      if (!id) {
        throw new Error("Delivery ID is required to delete the Delivery");
      }
      const result = await areaRepository.delete(id);
      if (!result) {
        throw new Error(`Delivery with ID ${id} not found for deletion`);
      }
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteDeliveryById:", error.message);
      throw error;
    }
  },

  // Delete Deliverys by Query
  async deleteDeliverysByQuery(query) {
    try {
      const deletedCount = await areaRepository.deleteByQuery(query);
      return deletedCount; // Return the number of deleted rows
    } catch (error) {
      console.error("Error in deleteDeliverysByQuery:", error.message);
      throw error;
    }
  },

  // Delete all Deliverys
  async deleteAllDeliverys() {
    try {
      await areaRepository.deleteAll();
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteAllDeliverys:", error.message);
      throw error;
    }
  },
};

module.exports = areaService;
