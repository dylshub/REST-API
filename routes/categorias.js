const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController");

// Crear nueva categoría
router.post("/", categoriasController.createCategoria);

// Obtener todas las categorías
router.get("/", categoriasController.getAllCategorias);

// Actualizar una categoría
router.put("/:id", categoriasController.updateCategoria);

module.exports = router;
