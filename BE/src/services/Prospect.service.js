const Prospect=require("../models/Prospect");

module.exports={
    
    createProspect: (data)=>{
        try{
           let prospect = await Prospect.create({
                email: data.email,
                password: data.password
            })
            return prospect
        } catch(e){
            throw e;
        }
       
    }

}