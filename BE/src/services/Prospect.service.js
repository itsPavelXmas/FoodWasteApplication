const sequelize = require("../database/connection");
const Prospect=require("../models/Prospect");

   const createProspect = async (data) => {

        try{
        let prospect = await Prospect.build({email:data.email, password:data.password});
        prospect.save()
        return prospect;
        }
        catch(error){
            throw error
        }
    }

   
    const getProspectByEmail = async (data) => {
        try{
            let prospect =  await Prospect.findOne({ where:{email:data.email}})
            return prospect
        }
        catch(error){

            throw error;
        }
        
    
    }

    module.exports ={createProspect,getProspectByEmail}

