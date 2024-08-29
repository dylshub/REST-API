const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Orden = sequelize.define(
  "Orden",
  {
    idOrden: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "idusuarios",
      },
    },
    estados_idestados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "estados",
        key: "idestados",
      },
    },
    fecha_creacion: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_entrega: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    total_orden: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "Orden",
    timestamps: false,
  }
);

module.exports = Orden;
