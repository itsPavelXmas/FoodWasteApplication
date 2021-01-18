let express = require('express');
let router = express.Router();
const DashboardController = require("../controllers/Dashboard.controller");

router.get('/get-data',DashboardController.getDashboardItems);
module.exports = router;