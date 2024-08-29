const Producto = require("../models/Producto");

// Crear un producto
exports.createProducto = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    console.log("PRODUCTO AGREGADO CORRECTAMENTE");
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.log("ERROR AL CREAR PRODUCTO", error);
    res.status(500).json({ error: "Error al crear el producto", error });
  }
};

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    console.log("PRODUCTO ENCONTRADO EXITOSAMENTE");
    res.status(200).json(productos);
  } catch (error) {
    console.log("ERROR AL ENCONTRAR PRODUCTO");
    res.status(500).json({ error: "Error al obtener los productos", error });
  }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      console.log("ERROR PRODUCTO NO ENCONTRADO", error);
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.log("ERROR AL BUSCAR PRODUCTO", error);
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    console.log("PRODUCTO ENCONTRADO EXITOSAMENTE");
    if (!producto) {
      console.log("ERROR PRODUCTO NO ENCONTRADO");
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    await producto.update(req.body);
    console.log("PRODUCTO ACTUALIZADO EXITOSAMENTE");
    res.status(200).json(producto);
  } catch (error) {
    console.log("ERROR AL ACTUALIZAR EL PRODUCTO", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};
