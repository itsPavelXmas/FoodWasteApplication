var express = require('express');
var router = express.Router();
const ProspectController = require("../controllers/Prospect.controller");

router.post('/register',ProspectController.register);

module.exports = router;