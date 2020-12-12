const express = require('express');
require('./src/database/connection')
var app = express();
const prospectRouter=require("./src/Routes/Prospect.route");

app.use(express.json());


app.use("/api/auth",prospectRouter);


app.use(express.urlencoded( {
    extended : false
}));

app.listen(3000);
