const sequelize=require("../database/connection");
const Request=require("../models/Request");
const RequestType= require('../models/RequestType');
const RequestStatus=require("../models/RequestStatus");
const Category=require("../models/Category");
const User=require("../models/User");


const buildRequestDTO = (request,category, user, type, status)=>{
    return {
        id:request.id,
        category:category.description,
        quantity:request.quantity,
        location:request.location,
        description:request.description,
        status:status.description,
        type:type.description
    }
}


const getAllRequestsByUserId= async (data)=>{
    try{
        let requests = await Request.findAll({
            where:{userId:data}});
            let catIds = requests.map( req => req.category);

            let userIds = requests.map( req => req.userId)

            let typeIds = requests.map( req => req.requestType);

            let statusIds = requests.map( req => req.requestStatus)
    
            let categories = await Category.findAll({
                where: {
                    id: catIds
                }
            });

            let statuses = await RequestStatus.findAll({
                where: {
                    id: statusIds
                }
            });
            let types = await RequestType.findAll({
                where: {
                    id: typeIds
                }
            });
    
            let users = await User.findAll({
                where: {
                    id: userIds
                }
            });
            return requests.map( req => {
                return buildRequestDTO(req, categories.find(cat => {
                    return cat.id == req.category;
                }),users.find(user => {
                    return user.id == req.userId
                }),types.find(type => {
                    return type.id == req.requestType
                }),statuses.find(status=>{
                    return status.id == req.requestStatus
                }));
            })
    }catch(error){
        throw error
    }
}

const updateRequestById= async(requestId) =>{
    try{
        console.log("buna");
        let request = await Request.update(
            { requestStatus:4},
            {where:{id:requestId}})
        return request;
    }catch(error){
        throw error;
    }
}

const createRequest = async (data) => {
    try{
    let request = await Request.build({
        userId:data.userId,
        category:data.category,
        quantity:data.quantity,
        location:data.location,
        description:data.description,
        requestType:data.requestType,
        requestStatus:data.requestStatus
    });
    request.save()
    return request;
    }
    catch(error){
        throw error
    }
}

module.exports={getAllRequestsByUserId,createRequest,updateRequestById};