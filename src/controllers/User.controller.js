const { compareSync } = require("bcrypt");
const UserService = require("../services/User.service");


const completePersonalData = async (require,response)=>{
try{
    const body = require.body;
    let user = await UserService.initUser(body)
    return response.status(200).json({data:user});
}
catch(e){
    return response.status(409).json({msg:"bad request"})
}
}

const getUser= async(require,response)=>{
    const body=require.body
    console.log(body);
    try{
        let user=await UserService.getUserByEmail(body)
        //console.log(user);
        return response.status(200).json({
           data:user
        })
    }catch(error){
        console.log(error)
        return response.status(404).json({msg:"user not found"})
        
    }
}


module.exports = {completePersonalData,getUser}