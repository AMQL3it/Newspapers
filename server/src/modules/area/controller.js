const { areaDataFilterHandler } = require("./midleware.js");
const areaService = require("./service.js");

const areaController = {
  // Create a new Area
  async createArea(req, res, next) {
    try {
      const area = await areaService.createArea(req.body);
      res.status(201).json(area); // Successfully created
    } catch (error) {
      next(error);
    }
  },

  // Get all Areas
  async getAllAreas(req, res, next) {
    try {
      const areas = await areaService.getAllAreas();
      res.status(200).json(areas);
    } catch (error) {
      next(error);
    }
  },

  // Get Area by ID
  async getAreaById(req, res, next) {
    try {
      const area = await areaService.getAreaById(req.params.id);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }
      res.status(200).json(area);
    } catch (error) {
      next(error);
    }
  },

  // Get Areas by Query
  async getAreasByQuery(req, res, next) {
    try {
      const areas = await areaService.getAreasByQuery(req.query);
      res.status(200).json(areas);
    } catch (error) {
      next(error);
    }
  },

  // Get Area by Query
  async getAreaByQuery(req, res, next) {
    try {
      const area = await areaService.getAreaByQuery(req.query);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }
      res.status(200).json(area);
    } catch (error) {
      next(error);
    }
  },

  // Update Area by ID
  async updateArea(req, res, next) {
    try {
      const area = await areaService.updateArea(req.params.id, req.body);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }
      res.status(200).json(area);
    } catch (error) {
      next(error);
    }
  },

  // Delete Area by ID
  async deleteArea(req, res, next) {
    try {
      const area = await areaService.deleteArea(req.params.id);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  // Delete Area by Query
  async deleteAreaByQuery(req, res, next) {
    try {
      const area = await areaService.deleteAreaByQuery(req.query);
      if (!area) {
        return res.status(404).json({ message: "Area not found" });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  // Delete all Areas
  async deleteAllAreas(req, res, next) {
    try {
      const areas = await areaService.deleteAllAreas();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = areaController;
