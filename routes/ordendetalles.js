const express = require("express");
const router = express.Router();
const ordenDetallesController = require("../controllers/ordendetallesController");

// Crear nuevo detalle de orden
router.post("/", ordenDetallesController.createOrdenDetalles);

// Obtener todos los detalles de órdenes
router.get("/", ordenDetallesController.getAllOrdenDetalles);

// Actualizar un detalle de orden
router.put("/:id", ordenDetallesController.updateOrdenDetalles);

module.exports = router;
