const { Router } = require("express");
const router = new Router();

const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");
const DeviceController = require("../controllers/DeviceController");
const rules = require("../utils/constants");

router.post("/", checkRoleMiddleware(rules.admin), DeviceController.create);
router.get("/", DeviceController.getAll);
router.get("/:id", DeviceController.getOne);

module.exports = router;
