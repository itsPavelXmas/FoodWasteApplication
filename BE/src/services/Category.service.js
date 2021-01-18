const Category=require("../models/Category");



const getAllCategories = async(req,res) => {

    try{
       let categories = await Category.findAll();
       return categories;
    }catch(error){
        throw error;
    }




}

module.exports = {getAllCategories};