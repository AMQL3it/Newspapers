const areaRepository = require("./repository.js");

const areaService = {
  // Create a new Area
  async createArea(data) {
    return await areaRepository.createArea(data);
  },

  // Get all Areas
  async getAllAreas() {
    return await areaRepository.getAllAreas();
  },

  // Get Area by ID
  async getAreaById(id) {
    return await areaRepository.getAreaById(id);
  },

  // Get Area by Query
  async getAreaByQuery(query) {
    return await areaRepository.getAreaByQuery(query);
  },

  // Get Areas by Query
  async getAreasByQuery(query) {
    return await areaRepository.getAreasByQuery(query);
  },

  // Update Area
  async updateArea(id, areaData) {
    return await areaRepository.updateArea(id, areaData);
  },

  // Delete Area
  async deleteArea(id) {
    return await areaRepository.deleteArea(id);
  },

  // Delete Area by Query
  async deleteAreaByQuery(query) {
    return await areaRepository.deleteAreaByQuery(query);
  },

  // Delete all Areas
  async deleteAllAreas() {
    return await areaRepository.deleteAllAreas();
  },
};

module.exports = areaService;
