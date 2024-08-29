//DATOS DE LA TABLA
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const rol = sequelize.define(
  "Rol",
  {
    idrol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "rol",
    timestamps: false,
  }
);

module.exports = rol;
