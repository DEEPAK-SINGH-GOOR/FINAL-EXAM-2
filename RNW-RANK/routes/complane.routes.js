const express = require("express");
const {
  createcomplane,
  updatecomplane,
  deletecomplane,
} = require("../controllers/complane.controllers");

const router = express.Router();

router.post("/complane", createcomplane);
router.put("/complane/:complaneId", updatecomplane);
router.delete("/complane/:complaneId", deletecomplane);

module.exports = router;
