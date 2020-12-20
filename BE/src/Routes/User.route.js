var express = require('express');
var router = express.Router();
const UserController=require("../controllers/User.controller");
const {checkToken}=require("../authValidation/tokenValidation");

router.post('/createPersonalData',checkToken, UserController.completePersonalData);
router.get('/retrieveData',checkToken,UserController.getUser);

module.exports=router;