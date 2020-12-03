const {register,login}=require("../controllers/user.controller");
const router= require("express").Router();
const checkToken=require("../auth/tokenValidation");

router.post("/register",register);
router.get("/login",login);

module.exports=router;

