const ApiError = require("../error/ApiError")
const { Brand } = require("../models")

class BrandController {
   async create(req, res) {
      const { name } = req.body
      if (!name) {
         return ApiError.badRequest('Missed field { name }!')
      }

      const brand = await Brand.create({name})
      return res.json(brand)
   }

   async getAll(req, res) {
      const brands = await Brand.findAll()
      return res.json({data: brands})
   }
}

module.exports = new BrandController()