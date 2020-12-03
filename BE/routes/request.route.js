const {createRequest,removeRequest,editLocation, editQuantity, editStatus}=require("../controllers/request.controller");
const router=require("express").Router();
const {checkToken}=require("../auth/tokenValidation");


router.post("/createRequest",checkToken,createRequest);
router.delete("/removeRequest/:id",checkToken,removeRequest);
router.put("/editLocation",checkToken,editLocation);
router.put("/editQuantity",checkToken,editQuantity);
router.put("/editStatus",checkToken,editStatus);


module.exports=router;



