const {Sequelize}=require('sequelize')
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port:process.env.DB_PORT
  });
  const connectDB = async()=>{
  try {
    await sequelize.authenticate();
    console.log('connection to db established');
      
  } catch (error) {
    console.log('unable to connect to db',error);
    
    
  }
}
 module.exports={sequelize, connectDB}