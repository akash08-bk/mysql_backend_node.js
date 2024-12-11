const express = require('express')
const app = express()
require('dotenv').config();
const {connectDB}=require('./config/dbMYSQL')
const productRoutes = require('./routes/productRoutes')
connectDB()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    res.status(200).send('hello')
    
})




const PORT = process.env.PORT||2000


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})