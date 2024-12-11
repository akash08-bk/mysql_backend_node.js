const express=require('express')
const {getAllProducts,
    createProducts,
    getProductByID,
    updateProduct,
    deleteProduct,}=require('../controllers/productController')

const router=express.Router();

router
.get('/',getAllProducts)
.post('/',createProducts)

router
.get('/:id',getProductByID)
.put('/:id',updateProduct)
.delete('/:id',deleteProduct)

module.exports=router