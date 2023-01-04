const dotenv= require('dotenv');

const {PORT}= require('./config/serverConfig');


dotenv.config();

module.exports={
    PORT:process.env.PORT
}