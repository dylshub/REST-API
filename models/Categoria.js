const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Categoria = sequelize.define(
  "Categoria",
  {
    idCategoriaProductos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "usuarios", // Nombre de la tabla de usuarios
        key: "idusuarios", // Llave primaria de la tabla de usuarios
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estados_idestados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "estados", // Nombre de la tabla de estados
        key: "idestados", // Llave primaria de la tabla de estados
      },
    },
    fecha_creacion: {
      type: Sequelize.DATE, // Ajustado al tipo datetime
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "CategoriaProductos",
    timestamps: false,
  }
);

module.exports = Categoria;
