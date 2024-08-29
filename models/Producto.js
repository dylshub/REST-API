//DATOS DE LA TABLA
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Producto = sequelize.define(
  "Producto",
  {
    idProductos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CategoriaProductos_idCategoriaProductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "CategoriaProductos",
        key: "idCategoriaProductos",
      },
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuarios",
        key: "idUsuarios",
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estados_idestados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "estados",
        key: "idestados",
      },
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fecha_creacion: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.Now,
    },
    foto: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "productos",
    timestamps: false,
  }
);

module.exports = Producto;
