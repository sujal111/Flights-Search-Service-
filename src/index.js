const express = require("express");
 const bodyParser=require('body-parser');



const {PORT}= require('./config/serverConfig');
const ApiRoutes=require('./routes/index');
const CityRepository=require('./respository/city-repository');
const setupandstartServer=async() =>{
    //create exprss object

    const app=express();
    const PORT=3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',ApiRoutes);
    app.listen(PORT,() =>{
        console.log(`Server sarted at ${PORT}`);
        const repo=new CityRepository();
        repo.createCity({name:"New Delhi"})
    })
}

setupandstartServer();