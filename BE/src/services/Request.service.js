const Request=require("../models/Request");


module.exports={

    addRequest:(data)=>{
        try{
            let request= await Request.create({
                category:data.category,
                requestType:data.requestType,
                userId:data.userId,
                quantity:data.quantity,
                location:data.location

            })
            return request
        } catch(e){
            throw e;
        }
    }
}