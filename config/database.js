//CONEXION A LA BASE DE DATOS
//PROBAR CONEXION CON node config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Dylandb", "myUser", "root", {
  host: "LAPTOP-0BTVPIVS",
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: true,
      enableArithAbort: true,
      trustedConnection: true,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito.");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

module.exports = sequelize;
