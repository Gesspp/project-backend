const { Router } = require("express");
const { add, all } = require("../controllers/task");

const router = Router();

router.post("/", add);
router.get("/", all);

module.exports = router;