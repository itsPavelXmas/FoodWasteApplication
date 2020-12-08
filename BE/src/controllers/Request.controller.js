const {addRequest}=require("../services/Request.service");
const{require,response}=require("express")


module.exports={
    createRequest:(require,response)=>{
        const body=require.body;
        try{
            let request = addRequest(body)
            return response.status(200).json({data:request});
        }
        catch(e){
            return response.status(409).json({msg:"bad request"});
        }
}
}