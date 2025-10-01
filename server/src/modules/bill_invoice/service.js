const billRepository = require("./repository");

const billService = {
  // Create a new Bill
  async createBill(data) {
    try {
      if (!data.name) {
        throw new Error("Name is required to create an Bill");
      }
      const bill = await billRepository.create(data);
      return bill;
    } catch (error) {
      console.error("Error in createBill:", error.message);
      throw error;
    }
  },

  // Get all Bills
  async getAllBills() {
    try {
      const bills = await billRepository.getAll();
      return bills;
    } catch (error) {
      console.error("Error in getAllBills:", error.message);
      throw error;
    }
  },

  // Get Bill by ID
  async getBillById(id) {
    try {
      if (!id) {
        throw new Error("Bill ID is required to fetch the Bill");
      }
      const bill = await billRepository.getById(id);
      return bill;
    } catch (error) {
      console.error("Error in getBillById:", error.message);
      throw error;
    }
  },

  // Get Bills by query
  async getBillsByQuery(query) {
    try {
      const bills = await billRepository.getAllByQuery(query);
      return bills;
    } catch (error) {
      console.error("Error in getBillsByQuery:", error.message);
      throw error;
    }
  },

  // Update Bill by ID
  async updateBill(id, data) {
    try {
      if (!id) {
        throw new Error("Bill ID is required to update the Bill");
      }
      if (!data) {
        throw new Error("Update data is required to update the Bill");
      }
      const updatedBill = await billRepository.update(id, data);
      if (!updatedBill) {
        throw new Error(`Bill with ID ${id} not found for update`);
      }
      return updatedBill;
    } catch (error) {
      console.error("Error in updateBill:", error.message);
      throw error;
    }
  },

  // Delete Bill by ID
  async deleteBillById(id) {
    try {
      if (!id) {
        throw new Error("Bill ID is required to delete the Bill");
      }
      const result = await billRepository.delete(id);
      if (!result) {
        throw new Error(`Bill with ID ${id} not found for deletion`);
      }
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteBillById:", error.message);
      throw error;
    }
  },

  // Delete Bills by Query
  async deleteBillsByQuery(query) {
    try {
      const deletedCount = await billRepository.deleteByQuery(query);
      return deletedCount; // Return the number of deleted rows
    } catch (error) {
      console.error("Error in deleteBillsByQuery:", error.message);
      throw error;
    }
  },

  // Delete all Bills
  async deleteAllBills() {
    try {
      await billRepository.deleteAll();
      return true; // Return true to indicate successful deletion
    } catch (error) {
      console.error("Error in deleteAllBills:", error.message);
      throw error;
    }
  },
};

module.exports = billService;
