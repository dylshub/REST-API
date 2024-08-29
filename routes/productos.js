const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// Crear nuevo producto
router.post("/", productosController.createProducto);

// Obtener todos los productos
router.get("/", productosController.getAllProductos);

// Ruta para obtener un producto por ID
router.get("/:id", productosController.getProductoById);

// Actualizar un producto
router.put("/:id", productosController.updateProducto);

module.exports = router;
