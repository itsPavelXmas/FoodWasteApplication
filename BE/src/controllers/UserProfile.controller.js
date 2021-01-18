const RequestService = require("../services/Request.service");

const getRequests= async(req,response)=>{
    try{
        let userId = req.params.userId
        let request=await RequestService.getAllRequestsByUserId(userId);
        return response.status(200).json({
           data:request
        })
    }catch(error){
        return response.status(404).json({msg:"Status not found"})
        
    }
}

const updateRequestStatus= async(req,response) =>{
    try{
        let requestId = req.params.requestId
        let requestUpdated = await RequestService.updateRequestById(requestId);
        return response.status(200).json({
            data:requestUpdated
        })

    }catch(error){
        return response.status(409).json({msg:"unable to change request status"})
    }

}

module.exports={getRequests,updateRequestStatus}