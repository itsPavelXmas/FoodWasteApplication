let express = require('express');
let router = express.Router();
const {checkToken}=require("../authValidation/tokenValidation");
const RequestController=require("../controllers/Request.controller");

router.get('/get-all-requests/:userId',checkToken,RequestController.getRequests);
router.post('/create-request',checkToken,RequestController.createRequest);
module.exports=router;