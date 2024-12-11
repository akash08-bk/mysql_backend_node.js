const errorHandler=(res,error)=>{
    console.log(error);
    res.status(500).json({message:'server error'})    
}
module.exports=errorHandler