const CategoryService = require("../services/Category.service");



const getCategories = async(req,response)=>{
    try{
        let categories = await CategoryService.getAllCategories();
        console.log(categories);
        return response.status(200).json({data: categories})
    }
    catch(error){
        console.log(error)
            return response.status(409).json({msg:"bad request"})
    }


}

module.exports = {getCategories}