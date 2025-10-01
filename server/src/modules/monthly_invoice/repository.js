const Bill = require("./model.js");

const billRepository = {
  // Create a new Bill
  async create(data) {
    try {
      const newBill = await Bill.create(data);
      return newBill;
    } catch (error) {
      console.error("Error creating Bill:", error.message);
      throw error;
    }
  },

  // Get all Bills
  async getAll() {
    try {
      return await Bill.findAll();
    } catch (error) {
      console.error("Error fetching all Bills:", error.message);
      throw error;
    }
  },

  // Get Bill by ID
  async getById(id) {
    try {
      const bill = await Bill.findByPk(id);
      if (!bill) {
        throw new Error(`Bill with ID ${id} not found`);
      }
      return bill;
    } catch (error) {
      console.error("Error fetching Bill by ID:", error.message);
      throw error;
    }
  },

  // Get by Query
  async getByQuery(query) {
    try {
      const bill = await Bill.findOne({ where: query });
      if (!bill) {
        throw new Error(`No Bill found matching query: ${JSON.stringify(query)}`);
      }
      return bill;
    } catch (error) {
      console.error("Error fetching Bill by query:", error.message);
      throw error;
    }
  },

  // Get Bill by Query for multiple results
  async getAllByQuery(query) {
    try {
      return await Bill.findAll({ where: query });
    } catch (error) {
      console.error("Error fetching Bills by query:", error.message);
      throw error;
    }
  },

  // Update Bill by ID
  async update(id, data) {
    try {
      const bill = await Bill.findByPk(id);
      if (!bill) {
        throw new Error(`Bill with ID ${id} not found`);
      }
      return await bill.update(data);
    } catch (error) {
      console.error("Error updating Bill:", error.message);
      throw error;
    }
  },

  // Delete Bill by ID
  async delete(id) {
    try {
      const bill = await Bill.findByPk(id);
      if (!bill) {
        throw new Error(`Bill with ID ${id} not found`);
      }
      await bill.destroy();
      return true; // Return a success status
    } catch (error) {
      console.error("Error deleting Bill by ID:", error.message);
      throw error;
    }
  },

  // Delete Bill by Query
  async deleteByQuery(query) {
    try {
      const deletedCount = await Bill.destroy({ where: query });
      if (deletedCount === 0) {
        throw new Error(`No Bills found matching query: ${JSON.stringify(query)}`);
      }
      return deletedCount;
    } catch (error) {
      console.error("Error deleting Bills by query:", error.message);
      throw error;
    }
  },

  // Delete all Bills
  async deleteAll() {
    try {
      return await Bill.destroy({ truncate: true });
    } catch (error) {
      console.error("Error deleting all Bills:", error.message);
      throw error;
    }
  },
};

module.exports = billRepository;
