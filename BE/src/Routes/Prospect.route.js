var express = require('express');
var router = express.Router();
const ProspectController = require("../controllers/Prospect.controller");

router.post('/register',ProspectController.register);
router.get('/login',ProspectController.login);
module.exports = router;