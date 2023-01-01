const { Router } = require("express");
const router = new Router();

const TypeController = require("../controllers/TypeController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const rules = require("../utils/constants");

router.post("/", checkRoleMiddleware(rules.admin), TypeController.create);
router.get("/", TypeController.getAll);

module.exports = router;
