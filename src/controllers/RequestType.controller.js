const RequestTypeService = require("../services/RequestType.service");

const getRequestTypes= async(req,response)=>{

    try{
        let requestType=await RequestTypeService.getRequestType();
        console.log(requestType)
        return response.status(200).json({
           data:requestType

        })
    }catch(error){
        return response.status(404).json({msg:"Status not found"})
        
    }
}

module.exports={getRequestTypes}