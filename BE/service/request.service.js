const connection= require("../connection.js");


module.exports={
    addRequest:(data,callback)=>{
            let sql= `INSERT INTO 
                        REQUEST(
                            request_type,
                            user_id,
                            location,
                            quantity,
                            status_id)
                        VALUES(
                            ?,
                            ?,
                            ?,
                            ?,
                            ?)`
         connection.query(
            sql,

            [
                data.requestType,
                data.userId,
                data.location,
                data.quantity,
                data.statusId
            ],

            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }

                return callback(null,data);
            }

         );                   
                            

    },

    deleteRequest:(id,callback)=>{
        let sql= `DELETE FROM
                    REQUEST
                    WHERE 
                    ID=?`
        
        connection.query(
            sql,
            [id],

            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }


        );
    },
    updateLocation:(request,callback)=>{
        let sql=`UPDATE REQUEST
                 SET location=?
                 WHERE 
                 ID=? `
        connection.query(
            sql,
            [request.location,
             request.id],

             (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }

        );

    },
    updateQuantity:(request,callback)=>{
        let sql=`UPDATE REQUEST
                 SET quantity=?
                 WHERE 
                 ID=? `
        connection.query(
            sql,
            [request.quantity,
             request.id],

             (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }

        );

    },

    updateStatus:(request,callback)=>{
        let sql=`UPDATE REQUEST
                 SET status_id=?
                 WHERE 
                 ID=? `
        connection.query(
            sql,
            [request.statusId,
             request.id],

             (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0]);
            }

        );

    }



    
}