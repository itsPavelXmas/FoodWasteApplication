const sequelize=require("../database/connection");
const RequestStatus=require("../models/RequestStatus");


const getRequestStatus= async ()=>{
    try{
        let requestStatus = await RequestStatus.findAll()
        console.log(requestStatus)
            return requestStatus
    }catch(error){
        throw error
    }
}

module.exports={getRequestStatus};