let express = require('express');
let router = express.Router();
const {checkToken}=require("../authValidation/tokenValidation");
const RequestStatusController = require('../controllers/RequestStatus.controller');
const RequestTypeController = require('../controllers/RequestType.controller');



router.get('/getAllTypes',checkToken,RequestTypeController.getRequestTypes);

module.exports=router;