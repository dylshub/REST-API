const Orden = require("../models/Orden");
const sequelize = require("../config/database"); // Ajusta la ruta según tu estructura de proyecto
const { QueryTypes } = require("sequelize");

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

//CREAR ORDEN CON DETALLES
exports.createOrdenConDetalles = async (req, res) => {
  const {
    usuarios_idusuarios,
    estados_idestados,
    nombre_completo,
    direccion,
    telefono,
    correo_electronico,
    fecha_entrega,
    detallesOrden,
  } = req.body;

  // Convierte detallesOrden a un formato adecuado para TVP
  const detallesOrdenSQL = detallesOrden
    .map(
      (detalle) =>
        `(${detalle.Productos_idProductos}, ${detalle.cantidad}, ${detalle.precio})`
    )
    .join(", ");

  // Crear el TVP para pasar al procedimiento almacenado
  const tvp = detallesOrden
    .map(
      (detalle) =>
        `(${detalle.Productos_idProductos}, ${detalle.cantidad}, ${detalle.precio})`
    )
    .join(", ");

  try {
    await sequelize.query(
      `DECLARE @detallesOrden dbo.DetallesOrdenTipo;

      INSERT INTO @detallesOrden (Productos_idProductos, cantidad, precio)
      VALUES ${tvp};

      EXEC InsertarOrdenConDetalles
        @usuarios_idusuarios = :usuarios_idusuarios,
        @estados_idestados = :estados_idestados,
        @nombre_completo = :nombre_completo,
        @direccion = :direccion,
        @telefono = :telefono,
        @correo_electronico = :correo_electronico,
        @fecha_entrega = :fecha_entrega,
        @detallesOrden = @detallesOrden`,
      {
        replacements: {
          usuarios_idusuarios,
          estados_idestados,
          nombre_completo,
          direccion,
          telefono,
          correo_electronico,
          fecha_entrega,
        },
        type: QueryTypes.RAW,
      }
    );

    res.status(200).json({ message: "Orden creada con éxito" });
  } catch (error) {
    console.error("Error al crear la orden con detalles:", error);
    res.status(500).json({ error: "Error al crear la orden con detalles" });
  }
};

//OBTENER ORDEN POR ID
exports.getOrdenById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      console.log("ERROR CRITICO");
      return res.status(400).json({ error: "ID inválido" });
    }

    const orden = await Orden.findByPk(id);

    if (orden) {
      console.log("Orden obtenido correctamente:");
      res.status(200).json(orden);
    } else {
      res.status(404).json({ error: "Orden no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener la Orden:", error.message);
    res.status(500).json({
      error: "Error interno del servidor. Inténtalo de nuevo más tarde.",
    });
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
