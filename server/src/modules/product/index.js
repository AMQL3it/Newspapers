
const express = require("express");
const productController = require("./controller");

const router = express.Router();

router.get("/:id", productController.getProduct);
router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
