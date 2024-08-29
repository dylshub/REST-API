const Orden = require("../models/Orden");

exports.createOrden = async (req, res) => {
  try {
    const nuevaOrden = await Orden.create(req.body);
    res.status(201).json(nuevaOrden);
    console.log("\n\n\n\n\nORDEN CREADA CON EXITO\n\n\n\n\n");
  } catch (error) {
    console.log(error, "\n\n\n ERROR AL CREAR LA ORDEN");
    res.status(500).json({ error: "Error al crear la Orden" });
  }
};

exports.getAllOrdenes = async (req, res) => {
  try {
    const ordenes = await Orden.findAll();
    res.status(200).json(ordenes);
    console.log("\n\n\n\n\nORDEN OBTENIDA CON EXITO\n\n\n\n\n");
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las Órdenes" });
    console.log(error, "\n\n\n\n\nERROR AL OBTENER LA ORDEN\n\n\n\n\n");
  }
};

exports.updateOrden = async (req, res) => {
  try {
    const { id } = req.params;
    const orden = await Orden.findByPk(id);
    if (!orden) {
      console.log("\n\n\n\n\nORDEN NO ENCONTRADA\n\n\n\n\n");
      return res.status(404).json({ error: "Orden no encontrada" });
    }
    await orden.update(req.body);
    console.log("\n\n\n\n\nORDEN ACTUALIZADA CON EXITO\n\n\n\n\n");
    res.status(200).json(orden);
  } catch (error) {
    console.log("\n\n\n\n\nERROR AL ACTUALIZAR LA ORDEN\n\n\n\n\n");
    res.status(500).json({ error: "Error al actualizar la Orden" });
  }
};
