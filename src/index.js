const express = require("express");

const productosRoutes = require("../routes/productos");
const categoriasRoutes = require("../routes/categorias");
const estadosRoutes = require("../routes/estados");
const usuariosRoutes = require("../routes/usuarios");
const ordenesRoutes = require("../routes/ordenes");
const authMiddleware = require("../middleware/authMiddleware");

const app = express();

app.use(express.json());

//ruta no protegida
app.use("/api/usuarios", usuariosRoutes);

//rutas protegidas
app.use("/api/productos", authMiddleware, productosRoutes);
app.use("/api/categorias", authMiddleware, categoriasRoutes);
app.use("/api/estados", authMiddleware, estadosRoutes);
app.use("/api/ordenes", authMiddleware, ordenesRoutes);
app.get("/api/usuarios/getAll", authMiddleware, usuariosRoutes);
app.get("/api/usuarios/:id", authMiddleware, usuariosRoutes);
app.put("/api/usuarios/:id", authMiddleware, usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
