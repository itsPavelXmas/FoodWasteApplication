const ProspectService=require("../services/Prospect.service");
const {hashSync, genSaltSync, compareSync}=require("bcrypt");
const UserService = require("../services/User.service")
const { response } = require("express");
const Prospect = require("../models/Prospect");
const { sign } = require("jsonwebtoken");



    const register = async (require,response)=>{
            const body=require.body;
            const salt=genSaltSync(10);
            body.password=hashSync(body.password,salt);

            try{
                let registerdUser = await ProspectService.getProspectByEmail(body)
                if(registerdUser){
                    return response.status(409).json({message: "Email already used by another user"})
                }else{
                    let prospect = await ProspectService.createProspect(body)
                    return response.status(200).json({message:"User successfully registered"});
                }
                
            }
            catch(error){
                console.log(error)
                    return response.status(409).json({msg:"bad request"})
            }
        }


    const login = async (require, response) => {
        const body = require.body;
        try{
          let prospect = await ProspectService.getProspectByEmail(body)

        let comparation = compareSync(body.password,prospect.password);
        if(comparation) {
            const jsontoken = sign({ result: body }, "qwe1234", {
                expiresIn: "1h"
              });
              return response.status(200).json({
                token: jsontoken
              })
        }else{
            return response.status(409).json({
                message:"bad credentials"
            })
        }
        }catch(error){
            return response.status(404).json({msg:"user not found"})
        }

        
    }

module.exports = {register,login};