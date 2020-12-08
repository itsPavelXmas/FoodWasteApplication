const sequelize = require("../database/connection");
const Prospect=require("../models/Prospect");
    
   const createProspect = async (data) => {
        try{
            Prospect.sync()
           let prospect = await Prospect.build({email:data.email, password:data.password.toString()});
           prospect.save();
           console.log(prospect)
            return prospect
        } catch(e){
            throw e;
        }
       
    }

    module.exports ={createProspect}

