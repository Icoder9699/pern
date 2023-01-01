const { Router } = require('express')
const authController = require('../controllers/AuthController')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()


router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/check', authMiddleware, authController.check)

module.exports = router