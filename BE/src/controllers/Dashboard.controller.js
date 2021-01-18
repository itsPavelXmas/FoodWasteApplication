const DashboardService = require("../services/Dashboard.service");


const getDashboardItems= async(req,response)=>{
    try{

        let items= await DashboardService.getDashboardItem();
        console.log(items);
        return response.status(200).json({
           data:items
        })
    }catch(error){
        return response.status(404).json({msg:"Status not found"})
        
    }
}

module.exports = {getDashboardItems};