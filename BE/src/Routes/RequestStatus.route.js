let express = require('express');
let router = express.Router();
const {checkToken}=require("../authValidation/tokenValidation");
const RequestStatusController=require("../controllers/RequestStatus.controller");


router.get('/get-all-statuses',checkToken,RequestStatusController.getRequestStatuses);

module.exports=router;