const express = require("express");
const router = express.Router();
const estadosController = require("../controllers/estadosController");

// Crear nuevo estado
router.post("/", estadosController.createEstado);

// Obtener todos los estados
router.get("/", estadosController.getAllEstado);

// Actualizar un estado
router.put("/:id", estadosController.updateEstado);

module.exports = router;
