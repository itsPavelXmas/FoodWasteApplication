let express = require('express');
let router = express.Router();
const {checkToken}=require("../authValidation/tokenValidation");
const RequestController=require("../controllers/Request.controller");

router.get('/getAllRequests',checkToken,RequestController.getRequests);
router.post('/createRequest',checkToken,RequestController.createRequest);
module.exports=router;