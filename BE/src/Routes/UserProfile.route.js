let express = require('express');
let router = express.Router();
const {checkToken}=require("../authValidation/tokenValidation");
const ProfileController=require("../controllers/UserProfile.controller");

router.get('/get-all-requests/:userId',checkToken,ProfileController.getRequests);
router.put('/update-status/:requestId',checkToken,ProfileController.updateRequestStatus);

module.exports=router;