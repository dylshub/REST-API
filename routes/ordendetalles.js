const express = require("express");
const router = express.Router();
const ordenDetallesController = require("../controllers/ordendetallesController");

// Crear nuevo detalle de orden
router.post("/", ordenDetallesController.createOrdenDetalles);

//OBTENER DETALLE DE LA ORDEN CON ID DETALLE
router.get("/:id", ordenDetallesController.getOrdenDetalleById);

// Obtener todos los detalles de ordenes
router.get("/", ordenDetallesController.getAllOrdenDetalles);

// Actualizar un detalle de orden
router.put("/:id", ordenDetallesController.updateOrdenDetalles);

module.exports = router;
