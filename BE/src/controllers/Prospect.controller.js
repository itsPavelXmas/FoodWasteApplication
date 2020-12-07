const {createProspect}=require("../services/Prospect.service");
const {hashSync, genSaltSync, compareSync}=require("bcrypt");

module.exports={

        Register: (require,response)=>{
            const body=require.body;
            const salt=genSaltSync(10);
            body.password=hashSync(body.password,salt);
          try{
              let prospect = createProspect(body)
              return response.status(200).json({data:prospect});
          }
          catch(e){
              return response.status(409).json({msg:"bad request"});
          }
        }

}