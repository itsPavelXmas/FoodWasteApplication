const {addUser, getUserByUserNameAndPassword} = require("../service/user.service.js");
const toDTO = require("../model/user.js");
const {sign}=require("jsonwebtoken");
const { compareSync } = require("bcrypt");

module.exports= {
    register: (user,res) => {  //require,response ...cream Control pt Crearea utilizatorului(register)
            const body=user.body;  //din require luam body-ul(JSON-ul)

            

            addUser(body,(err,user)=> {
                if(err){
                    return res.status(409).json({
                        data: err
                    });
                }
                return res.status(200).json({
                    data: toDTO(user)
                })
            });
    },

    login: (user,respose) => {
        const body=user.body;

        getUserByUserNameAndPassword(body,(err,results) => {
            if(err){
                return respose.status(404).json({
                    message:"User not found"
                })

            }
            
            let result;
            const jsontoken= sign({body: results}, "qwe1234", {
                expiresIn:"1h"
            });

            return respose.status(200).json({
                success: 1,
                message: "Login succesfully",
                token:jsontoken
            })
                 
            

        });
    }
}

