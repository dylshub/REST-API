const express = require("express");
const router = express.Router();
const ordenesController = require("../controllers/ordenesController");

// Crear nueva orden
router.post("/", ordenesController.createOrden);

// Obtener todas las órdenes
router.get("/", ordenesController.getAllOrdenes);

// Actualizar una orden
router.put("/:id", ordenesController.updateOrden);

module.exports = router;
