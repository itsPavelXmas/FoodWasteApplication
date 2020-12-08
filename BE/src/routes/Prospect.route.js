const {Register}=require("../controllers/Prospect.controller");
const router=require("express").Router();


router.post("/register",Register); //trb modificat aici

module.exports=router;