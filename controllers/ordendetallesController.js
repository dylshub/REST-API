const OrdenDetalles = require("../models/OrdenDetalles");

exports.createOrdenDetalles = async (req, res) => {
  try {
    const nuevaOrdenDetalle = await OrdenDetalles.create(req.body);
    res.status(201).json(nuevaOrdenDetalle);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Orden Detalles" });
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
