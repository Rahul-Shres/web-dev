
const fs = require("fs")
const Product = require("../../../model/productModel")



exports.getProduct = async(req ,res)=>{

    const {id} = req.params
if(!id){
    return res.status(400).json({
        message : "Please provide id(productId)"
    })
}
const product = await Product.find({_id : id})
if(product.length == 0){
    res.status(400).json({
        message : "No product found with that id",
      data : {  
        data : [],
        data2 : []
    }
    })
}else{
    res.status(200).json({
        message : "Product fetched successfully",
        data : { 
            product     
         }
    })
}

}





