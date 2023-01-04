const express = require("express");
 const bodyParser=require('body-parser');



const {PORT}= require('./config/serverConfig');
const setupandstartServer=async() =>{
    //create exprss object

    const app=express();
    const PORT=3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,() =>{
        console.log(`Server sarted at ${PORT}`);
    })
}

setupandstartServer();