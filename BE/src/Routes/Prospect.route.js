let express = require('express');
let router = express.Router();
const ProspectController = require("../controllers/Prospect.controller");

router.post('/register',ProspectController.register);
router.post('/login',ProspectController.login);
module.exports = router;