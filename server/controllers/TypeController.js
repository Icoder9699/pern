const ApiError = require("../error/ApiError");
const { Type } = require("../models");

class TypeController {
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      return next(ApiError.badRequest("Missing field { name }!"));
    }

    const type = await Type.create({ name });

    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json({data: types});
  }
}

module.exports = new TypeController();
