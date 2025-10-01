const Delivery = require("./model.js");

const deliveryRepository = {
  // Create a new Delivery
  async create(data) {
    try {
      const newDelivery = await Delivery.create(data);
      return newDelivery;
    } catch (error) {
      console.error("Error creating Delivery:", error.message);
      throw error;
    }
  },

  // Get all Deliverys
  async getAll() {
    try {
      return await Delivery.findAll();
    } catch (error) {
      console.error("Error fetching all Deliverys:", error.message);
      throw error;
    }
  },

  // Get Delivery by ID
  async getById(id) {
    try {
      const delivery = await Delivery.findByPk(id);
      if (!delivery) {
        throw new Error(`Delivery with ID ${id} not found`);
      }
      return delivery;
    } catch (error) {
      console.error("Error fetching Delivery by ID:", error.message);
      throw error;
    }
  },

  // Get by Query
  async getByQuery(query) {
    try {
      const delivery = await Delivery.findOne({ where: query });
      if (!delivery) {
        throw new Error(`No Delivery found matching query: ${JSON.stringify(query)}`);
      }
      return delivery;
    } catch (error) {
      console.error("Error fetching Delivery by query:", error.message);
      throw error;
    }
  },

  // Get Delivery by Query for multiple results
  async getAllByQuery(query) {
    try {
      return await Delivery.findAll({ where: query });
    } catch (error) {
      console.error("Error fetching Deliverys by query:", error.message);
      throw error;
    }
  },

  // Update Delivery by ID
  async update(id, data) {
    try {
      const delivery = await Delivery.findByPk(id);
      if (!delivery) {
        throw new Error(`Delivery with ID ${id} not found`);
      }
      return await delivery.update(data);
    } catch (error) {
      console.error("Error updating Delivery:", error.message);
      throw error;
    }
  },

  // Delete Delivery by ID
  async delete(id) {
    try {
      const delivery = await Delivery.findByPk(id);
      if (!delivery) {
        throw new Error(`Delivery with ID ${id} not found`);
      }
      await delivery.destroy();
      return true; // Return a success status
    } catch (error) {
      console.error("Error deleting Delivery by ID:", error.message);
      throw error;
    }
  },

  // Delete Delivery by Query
  async deleteByQuery(query) {
    try {
      const deletedCount = await Delivery.destroy({ where: query });
      if (deletedCount === 0) {
        throw new Error(`No Deliverys found matching query: ${JSON.stringify(query)}`);
      }
      return deletedCount;
    } catch (error) {
      console.error("Error deleting Deliverys by query:", error.message);
      throw error;
    }
  },

  // Delete all Deliverys
  async deleteAll() {
    try {
      return await Delivery.destroy({ truncate: true });
    } catch (error) {
      console.error("Error deleting all Deliverys:", error.message);
      throw error;
    }
  },
};

module.exports = deliveryRepository;
