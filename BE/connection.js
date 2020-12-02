
//connection to mysql db
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "paROla2683",
    database: "FoodWastedDb",
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Connection Failed");
    }
})



module.exports = mysqlConnection;
