const OrdenDetalles = require("../models/OrdenDetalles");

exports.createOrdenDetalles = async (req, res) => {
  try {
    const nuevaOrdenDetalle = await OrdenDetalles.create(req.body);
    res.status(201).json(nuevaOrdenDetalle);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Orden Detalles" });
  }
};

//OBTENER ORDEN POR ID
exports.getOrdenDetalleById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      console.log("ERROR CRITICO");
      return res.status(400).json({ error: "ID inválido" });
    }

    const ordendetalles = await OrdenDetalles.findByPk(id);

    if (ordendetalles) {
      console.log("Orden obtenido correctamente:");
      res.status(200).json(ordendetalles);
    } else {
      res.status(404).json({ error: "Orden no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener la Orden:", error.message);
    res.status(500).json({
      error: "Error interno del servidor. Inténtalo de nuevo más tarde.",
    });
  }
};

exports.getAllOrdenDetalles = async (req, res) => {
  try {
    const ordenesDetalles = await OrdenDetalles.findAll();
    res.status(200).json(ordenesDetalles);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la Orden Detalles" });
  }
};

exports.updateOrdenDetalles = async (req, res) => {
  try {
    const { id } = req.params;
    const ordenDetalle = await OrdenDetalles.findByPk(id);
    if (!ordenDetalle) {
      return res.status(404).json({ error: "Orden Detalles no encontrada" });
    }
    await ordenDetalle.update(req.body);
    res.status(200).json(ordenDetalle);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la Orden Detalles" });
  }
};
