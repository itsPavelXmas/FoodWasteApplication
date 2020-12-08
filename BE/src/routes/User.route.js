const{addUser}=require("../controllers/user.controller");
const router=require("express").Router();

router.post("/register",addUser)

module.exports=router;