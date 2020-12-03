const connection=require('../connection.js'); // export from connection.js Database 

module.exports={
    addUser: (data, callback) =>{
        let sql= `INSERT INTO 
                     User(
                         first_name,
                         last_name,
                          role_id, 
                          is_partner,
                           user_type, 
                           user_name, 
                           password, 
                           email, 
                           reg_date)
                        values(
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?,
                            ?)`
        connection.query(
        sql,
         [data.first_name,
         data.last_name,
         data.role_id,
         data.is_partner,
         data.user_type,
         data.user_name,
         data.password,
         data.email,
         new Date(data.reg_date)],

         (error,results,fields) => {
             if(error){
                 return callback(error)
             }
             return callback(null,data)
         }
        );
    },
    getUserByUserNameAndPassword:(data,callback) => {
       let sql = ` SELECT * 
                    FROM user
                    WHERE 
                        user_name =? 
                        AND password =?`

        connection.query(
            sql,
            [
                data.user_name, 
                data.password
            ],
            (error,results,fields)=>{
                if(error){
                     return callback(error);
                }
                return callback(null,results[0]);
            }
        )
    }
    
}