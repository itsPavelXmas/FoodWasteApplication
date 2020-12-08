const { create } = require("../models/User");
const {createUser}=require("../services/User.service");

module.exports={


    addUser:(require,response)=>{
        const body=require.body;

        try{
            let user = createUser(body)
            return response.status(200).json({data:user});
        }
        catch(e){
            return response.status(409).json({msg:"bad request"});
        }
    }
}