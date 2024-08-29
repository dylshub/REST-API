const Estado = require("../models/Estado");

exports.createEstado = async (req, res) => {
  try {
    const nuevoEstado = await Estado.create(req.body);
    console.log("ESTADO CREADO CORRECTAMENTE");
    res.status(201).json(nuevoEstado);
  } catch (error) {
    console.error("Error al crear Estado:", error);
    res.status(500).json({ error: "Error al crear Estado" });
  }
};

exports.getAllEstado = async (req, res) => {
  try {
    const estados = await Estado.findAll();
    res.status(200).json(estados);
  } catch (error) {
    console.error("ERROR AL OBTENER LOS ESTADOS:", error);
    res.status(500).json({ error: "Error al obtener los Estados" });
  }
};

exports.updateEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const estado = await Estado.findByPk(id);
    if (!estado) {
      console.log("ERROR ESTADO NO ENCONTRADO", error);
      return res.status(404).json({ error: "Estado no encontrado" });
    }
    await estado.update(req.body);
    console.log("ESTADO ACTUALIZADO");
    res.status(200).json(estado);
  } catch (error) {
    console.error("Error al actualizar Estado:", error);
    res.status(500).json({ error: "Error al actualizar Estado" });
  }
};
