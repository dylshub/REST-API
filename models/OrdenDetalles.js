const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");
const Orden = require("./Orden");
const Productos = require("../models/Producto.js");

const OrdenDetalles = sequelize.define(
  "OrdenDetalles",
  {
    idOrdenDetalles: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Orden_idOrden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Orden",
        key: "idOrden",
      },
    },
    Productos_idProductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Productos",
        key: "idProductos",
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "OrdenDetalles",
    timestamps: false,
  }
);

// Definir las asociaciones
OrdenDetalles.belongsTo(Orden, { foreignKey: "Orden_idOrden" });
OrdenDetalles.belongsTo(Productos, { foreignKey: "Productos_idProductos" });

module.exports = OrdenDetalles;
