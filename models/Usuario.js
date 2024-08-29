//ENDPOINT
const { DataTypes, Sequelize, NOW, DATE } = require("sequelize");
const sequelize = require("../config/database.js");

const Usuario = sequelize.define(
  "Usuario",
  {
    idUsuarios: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_idrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "rol",
        key: "idrol",
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
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Usuarios",
    timestamps: false,
  }
);

module.exports = Usuario;
