const { Router } = require('express')
const router = new Router()

const deviceRouter = require('./device-router')
const authRouter = require('./auth-router')
const typeRouter = require('./type-router')
const brandRouter = require('./brand-router')

router.use('/v1/brand', brandRouter)
router.use('/v1/auth', authRouter)
router.use('/v1/device', deviceRouter)
router.use('/v1/type', typeRouter)

module.exports = router