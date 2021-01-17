const sequelize = require("../database/connection");
const User=require("../models/User");


const initUser = async (data) =>{
    try{
        console.log(data)
        let user = await User.build({
            email:data.email,
            cnp:data.cnp,
            name:data.name,
            surrname:data.surrname,
            address:data.address,
            series:data.series,
            roleId:data.roleId,

        })
        user.save()
        return user
    }catch(error){
        throw error
    }
    
}

const getUserByEmail = async (data) => {
    try{
        let user = await User.findOne({
            where:{email:data.email}})
            return user
    }catch(error){
        throw error
    }
}
module.exports = {initUser,getUserByEmail};
    