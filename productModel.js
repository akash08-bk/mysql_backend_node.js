const {  DataTypes } = require('sequelize');
const {sequelize} =  require('../config/dbMYSQL');

const Product = sequelize.define('Product',
  {
    // Model attributes are defined here
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    p_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    p_desc: {
      type: DataTypes.STRING,
      allowNull:true,
      defaultValue:"demo desc"
      // allowNull defaults to true
    },
    p_qty:{
        type:DataTypes.INTEGER,
        allowNull:false,
        default:0
    },
    p_price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }

  },
  
);

(async()=>{
    try {
        await Product.sync({force:true});
        console.log("successful");
        
    } catch (error) {
        console.log("error in sync table",error.message);
        
        
    }
    
    
})();
module.exports=Product