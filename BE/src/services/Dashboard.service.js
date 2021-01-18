const sequelize = require("../database/connection");
const User=require("../models/User");
const Request=require("../models/Request");
const Category=require("../models/Category");




const buildDashboardItem = (request,category, user)=>{
    return {
        userId: request.userId,
        id:request.id,
        name:user.name + ' ' + user.surrname,
        email:user.email,
        category:category.description,
        quantity:request.quantity,
        location:request.location,
        description:request.description,
    }
}

const getDashboardItem= async(req,response) => {

    try{
        let requests = await Request.findAll();
    
        let catIds = requests.map( req => req.category);

        let userIds = requests.map( req => req.userId)

        let categories = await Category.findAll({
            where: {
                id: catIds
            }
        });

        let users = await User.findAll({
            where: {
                id: userIds
            }
        });
        return requests.map( req => {
            return buildDashboardItem(req, categories.find(cat => {
                return cat.id == req.category;
            }),users.find(user => {
                return user.id == req.userId
            }));
        })



    }catch(error){
        throw error;
    }
}

module.exports ={getDashboardItem}