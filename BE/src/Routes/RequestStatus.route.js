var express = require('express');
var router = express.Router();
const {checkToken}=require("../authValidation/tokenValidation");
const RequestStatusController=require("../controllers/RequestStatus.controller");


router.get('/getAllStatuses',checkToken,RequestStatusController.getRequestStatuses);

module.exports=router;