const sequelize=require("../database/connection");
const Request=require("../models/Request");
const RequestType= require('../models/RequestType');
const getRequestByType= async (data)=>{
    try{
        let requestType = await Request.findOne({
            where:{description:data.description}});
        if(requestType){
            let requests = await Request.findAll({
                where:{requestType:requestType}
            });
            return requests
        }

    }catch(error){
        throw error
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

module.exports={getRequestByType,createRequest};