const User=require("../models/User");


module.exports={

        createUser:(data)=>{
            try{
                let user= await.User.create({
                    email:data.emai,
                    cnp:data.cnp,
                    name:data.name,
                    surrname:data.surrname,
                    address:data.address,
                    series:data.series
                })
                return user
            } catch(e){
                throw e;
        }
}


    
}