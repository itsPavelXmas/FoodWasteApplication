const RequestStatusService = require("../services/RequestStatus.service");

const getRequestStatuses= async(req,response)=>{

    try{
        let requestStatus=await RequestStatusService.getRequestStatus();
        console.log(requestStatus)
        return response.status(200).json({
           data:requestStatus
        })
    }catch(error){
        return response.status(404).json({msg:"Status not found"})
        
    }
}

module.exports={getRequestStatuses}