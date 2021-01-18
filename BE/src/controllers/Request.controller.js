const RequestService = require("../services/Request.service");

const getRequests= async(req,response)=>{
    try{
        let userId = req.params.userId
        console.log(userId);
        let request=await RequestService.getAllRequestsByUserId(userId);
        return response.status(200).json({
           data:request
        })
    }catch(error){
        return response.status(404).json({msg:"Status not found"})
        
    }
}
const createRequest = async (require,response)=>{
    try{
        const body = require.body;
        let request = await RequestService.createRequest(body);
        return response.status(200).json({data:request});
    }
    catch(e){
        return response.status(409).json({msg:"bad request"})
    }
}

module.exports={getRequests,createRequest}