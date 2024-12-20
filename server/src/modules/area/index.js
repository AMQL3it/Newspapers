const express = require("express");
const areaController = require("./controller");
const { areaValidator, areaDataFilterHandler } = require("./midleware");


const router = express.Router();

// Define routes for Area operations
router.post("/", areaValidator, areaDataFilterHandler, areaController.createArea);  // Create Area
router.get("/", areaController.getAllAreas);  // Get all Areas
router.get("/:id", areaController.getAreaById);  // Get Area by ID

// If you need to get Areas by Query, combine logic in one controller function
router.get("/query", areaController.getAreasByQuery);  // Get Areas by Query

router.put("/:id", areaController.updateArea);  // Update Area by ID

router.delete("/:id", areaController.deleteArea);  // Delete Area by ID
router.delete("/query", areaController.deleteAreaByQuery);  // Delete Area by Query
router.delete("/all", areaController.deleteAllAreas);  // Delete all Areas

module.exports = router;
