const { Router } = require('express')
const router = new Router()

const BrandController = require('../controllers/BrandController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const rules  = require('../utils/constants')


router.get('/', BrandController.getAll)
router.post('/', checkRoleMiddleware(rules.admin), BrandController.create)

module.exports = router