const express = require("express");
const router = express.Router();
const ordenesController = require("../controllers/ordenesController");

// Crear nueva orden
router.post("/", ordenesController.createOrden);

// Obtener todas las órdenes
router.get("/", ordenesController.getAllOrdenes);

// Actualizar una orden
router.put("/:id", ordenesController.updateOrden);

//OBTENER ORDEN POR ID
router.get("/:id", ordenesController.getOrdenById);

//CREAR ORDEN CON ORDEN DETALLES
router.post("/detalles", ordenesController.createOrdenConDetalles);

module.exports = router;
