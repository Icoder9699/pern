const { Router } = require("express");
const authController = require("../controllers/AuthController");
const authMiddleware = require("../middleware/authMiddleware");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const rules = require("../utils/constants");
const router = new Router();

router.post("/registration", authController.registration);
router.post("/login", authController.login);
router.get("/check", authMiddleware, authController.check);
router.get("/list", checkRoleMiddleware(rules.admin), authController.getAll);

module.exports = router;
