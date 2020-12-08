const express = require('express');
require('./src/database/connection')
var app = express();
const userRouter=require("./src/Routes/User.route");


app.use(express.json());


app.use("/api/user",userRouter);


app.use(express.urlencoded( {
    extended : false
}));

app.listen(3000);
