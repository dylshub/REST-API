const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

// Crear nuevo usuario
router.post("/", usuariosController.createUsuario);

// Obtener todos los usuarios
router.get("/getAll", usuariosController.getAllUsuarios);

// Obtener usuario por ID
router.get("/:id", usuariosController.getUsuarioById);

// Actualizar un usuario
router.put("/:id", usuariosController.updateUsuario);

//login
router.post("/login", usuariosController.login); //crear usuario sin token

module.exports = router;
