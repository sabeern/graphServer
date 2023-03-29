const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/graphData", dataController.graphData);

module.exports = router;
