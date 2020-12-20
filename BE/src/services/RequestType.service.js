const sequelize=require("../database/connection");
const RequestType=require("../models/RequestType");


const getRequestType= async ()=>{
    try{
        let requestType = await RequestType.findAll()
        console.log(requestType)
            return requestType
    }catch(error){
        throw error
    }
}

module.exports={getRequestType};