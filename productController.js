const errorHandler=require('../utils/errorHandler')
const Product=require('../models/productModel')
const getAllProducts=async(req,res)=>{
    try {
        const products=await Product.findAll();
        res.status(200).json(products)
        
    } catch (error) {
        errorHandler(res,error)
        
    }

}
const createProducts=async(req,res)=>{
    try {
        const product= await Product.create(req.body)
      res.status(201).json(product)
    } catch (error) {

        errorHandler(res,error)
    }
    
}
const getProductByID=async(req,res)=>{
    try {
        const product = await Product.findByPk(req.params.id)
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json({message: "product not found"})
        }
    } catch (error) {
        errorHandler(res,error)
    }
    
}
const updateProduct=async(req,res)=>{
    try {
        const product = await Product.findByPk(req.params.id)
        if(product){
            const updateProduct=await product.update(req.body)
            res.status(200).json(product)
        }else{
            res.status(404).json({message: "product not found"})
        }
    } catch (error) {
        errorHandler(res,error)
        
    }
    
}
const deleteProduct = async (req, res) => {
    try {
      // Find the product by primary key (ID)
      const product = await Product.findByPk(req.params.id);
  
      // Check if the product exists
      if (product) {
        // Delete the product
        await product.destroy();  // Invoke destroy as a function
  
        // Send a success response
        res.status(200).json({ message: "Product deleted successfully" });
      } else {
        // If product not found, send a 404 error
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      // Handle any errors that occur
      errorHandler(res, error);
    }
  };
  

    

module.exports={
    getAllProducts,
    createProducts,
    getProductByID,
    updateProduct,
    deleteProduct,
}