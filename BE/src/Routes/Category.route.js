let express = require('express');
let router = express.Router();
const CategoryController = require("../controllers/Category.controller");

router.get('/categories',CategoryController.getCategories);
module.exports = router;