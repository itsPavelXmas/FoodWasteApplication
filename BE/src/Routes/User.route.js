let express = require('express');
let router = express.Router();
const UserController=require("../controllers/User.controller");
const {checkToken}=require("../authValidation/tokenValidation");

router.post('/create-personal-data',checkToken, UserController.completePersonalData);
router.get('/retrieve-data/:email',checkToken,UserController.getUser);

module.exports=router;