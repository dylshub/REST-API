//DATOS DE LA TABLA
const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database.js");

const Estado = sequelize.define(
  "Estado",
  {
    idestados: {
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
    tableName: "estados",
    timestamps: false,
  }
);

module.exports = Estado;
