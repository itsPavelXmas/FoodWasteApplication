const { response, request } = require("express");
const {addRequest, deleteRequest,updateLocation, updateQuantity, updateStatus}=require("../service/request.service");


module.exports={
    createRequest: (request,response)=>{
        const body=request.body;

        addRequest(body,(error,request)=>{

            if(error){
                return response.status(409).json({
                    message:"Error" +error
                })
            }
            return response.status(200).json({
                message:"Request Created Successfully"
            })
        })
    },

    removeRequest:(request,response)=>{
        const id=request.params.id;
        
        deleteRequest(id,(error,request)=>{

            if(error){
                return response.status(409).json({
                    message:"Error" + error
                })
            }
            return response.status(200).json({
                message:"Request Removed Successfully"
            })

        });
        
    },

    editLocation:(request,response)=>{
        const body=request.body;

        updateLocation(body,(error,request)=>{
            if(error){
                return response.status(409).json({
                    message:"Error" + error
                })
            }
            return response.status(200).json({
                message:"Location Edited Successfully"
            })
        })
    },

    editQuantity:(request,response)=>{
        const body=request.body;

        updateQuantity(body,(error,request)=>{
            if(error){
                return response.status(409).json({
                    message:"Error" + error
                })
            }
            return response.status(200).json({
                message:"Quantity Edited Successfully"
            })
        })
    },
    editStatus:(request,response)=>{
        const body=request.body;

        updateStatus(body,(error,request)=>{
            if(error){
                return response.status(409).json({
                    message:"Error" + error
                })
            }
            return response.status(200).json({
                message:"Status Edited Successfully"
            })
        })
    },

}
