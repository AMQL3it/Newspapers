const Area = require("./model.js");

const areaRepository = {
  // Create a new Area
  async createArea(data) {
    return Area.create(data);
  },

  // Get all Areas
  async getAllAreas() {
    return Area.findAll();
  },

  // Get Area by ID
  async getAreaById(id) {
    return Area.findByPk(id);
  },

  // Get by Query
  async getAreaByQuery(query) {
    return Area.findOne({ where: query });
  },

  // Get Area by Query for multiple results
  async getAreasByQuery(query) {
    return Area.findAll({ where: query });
  },

  // Update Area by ID
  async updateArea(id, data) {
    const area = await Area.findByPk(id);
    if (area) {
      return area.update(data);
    }
    return null;
  },

  // Delete Area by ID
  async deleteArea(id) {
    const area = await Area.findByPk(id);
    if (area) {
      return area.destroy();
    }
    return null;
  },

  // Delete Area by Query
  async deleteAreaByQuery(query) {
    return Area.destroy({ where: query });
  },

  // Delete all Areas
  async deleteAllAreas() {
    return Area.destroy({ truncate: true });
  },
};

module.exports = areaRepository;
