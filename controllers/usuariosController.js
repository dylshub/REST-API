const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");

//login
//sigin

const secretKey = "llave"; //cambiar

// Función para encriptar la contraseña
const encriptarContraseña = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw new Error("Error al encriptar la contraseña");
  }
};

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  try {
    const { password, ...usuarioData } = req.body;

    if (!password) {
      return res.status(400).json({ error: "La contraseña es requerida" });
    }

    const hashedPassword = await encriptarContraseña(password);

    const nuevoUsuario = await Usuario.create({
      ...usuarioData,
      password: hashedPassword,
    });

    console.log("Usuario agregado correctamente:");
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error al crear el Usuario:", error.message);
    res.status(500).json({
      error: "Error al crear el Usuario.",
    });
  }
};

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    console.log("Usuarios obtenidos correctamente:", usuarios);
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los Usuarios:", error.message);
    res.status(500).json({
      error: "Error al obtener los Usuarios. Inténtalo de nuevo más tarde.",
    });
  }
};

// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      console.log("ERROR CRITICO");
      return res.status(400).json({ error: "ID inválido" });
    }

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      console.log("Usuario obtenido correctamente:", usuario);
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener el Usuario:", error.message);
    res.status(500).json({
      error: "Error interno del servidor. Inténtalo de nuevo más tarde.",
    });
  }
};

// Actualizar un usuario existente
exports.updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, ...usuarioData } = req.body;

    const usuario = await Usuario.findByPk(id);
    console.log("\n\n\nUSUARIO OBTENIDO CORRECTAMENTE\n\n\n");
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (password) {
      const hashedPassword = await encriptarContraseña(password);
      await usuario.update({ ...usuarioData, password: hashedPassword });
    } else {
      await usuario.update(usuarioData);
    }
    console.log(usuario, "\n\n\nUsuario actualizado correctamente");
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al actualizar el Usuario:", error.message);
    res.status(500).json({
      error: "Error al actualizar el Usuario. Inténtalo de nuevo más tarde.",
    });
  }
};

// Iniciar sesión y generar el token
exports.login = async (req, res) => {
  const { correo_electronico, password } = req.body;

  try {
    // Busca el usuario utilizando el campo correo_electronico
    const user = await Usuario.findOne({ where: { correo_electronico } });

    if (!user) {
      console.log("Usuario no encontrado");
      return res
        .status(401)
        .json({ error: "USUARIO O CONTRASEÑA INCORRECTOS" });
    }

    console.log("Usuario encontrado:", user);

    // Verifica si la contraseña es correcta
    const passwordCorrect = await bcrypt.compare(password, user.password);
    console.log("Contraseña proporcionada:", password);
    console.log("Hash almacenado:", user.password);
    console.log("¿Contraseñas coinciden?:", passwordCorrect);

    if (!passwordCorrect) {
      return res
        .status(401)
        .json({ error: "USUARIO O CONTRASEÑA INCORRECTOS" });
    }

    // Genera un token JWT
    const token = jwt.sign({ id: user.idUsuarios }, secretKey, {
      expiresIn: "24h",
    });

    // Devuelve el token
    res.json({ token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    res.status(500).json({ error: "ERROR AL INICIAR SESION" });
  }
};
