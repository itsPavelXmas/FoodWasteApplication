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


module.exports = {completePersonalData}