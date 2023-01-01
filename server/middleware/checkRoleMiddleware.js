const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTION") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        res.status(401).res({ message: "Пользовател не авторизован!" });
      }

      const decoded = jwt.decode(token, process.env.SECTER_KEY);
      
      if (decoded.role !== role) {
         return res.status(403).json({message: "У вас нет доступа!"})
      }

      req.user = decoded; // returns id, email, role

      next();
    } catch (error) {
      res.status(401).json({ message: "Пользовател не авторизован!" });
    }
  };
};
