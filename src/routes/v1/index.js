const express= require('express');
const cityController= require('../../controllers/city-controller');
const { CityRepository } = require('../../respository');

const router=express.Router();

router.post('/city',CityController.create);
module.exports=router;