const mysql = require('mysql');
const jwt=require('jsonwebtoken');
const express = require('express');
const mysqlConnection = require('./connection')
var app = express();
const userRouter=require("./routes/user.route");
const requestRouter = require('./routes/request.route');


app.use(express.json());

app.use("/api/requests",requestRouter);

app.use("/api/user",userRouter);


app.use(express.urlencoded( {
    extended : false
}));

app.listen(3000);




