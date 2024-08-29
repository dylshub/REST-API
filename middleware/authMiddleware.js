const jwt = require("jsonwebtoken");

const secretkey = "llave"; // la misma palabra que en las rutas

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("TOKEN ", "");

  if (!token) {
    return res
      .status(401)
      .json({ error: "ACCESO DENEGADO, NO SE PROPORCIONO EL TOKEN " });
  }

  try {
    const decoded = jwt.verify(token, secretkey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "TOKEN INVALIDO O EXPIRADO" });
  }
};

module.exports = authMiddleware;
