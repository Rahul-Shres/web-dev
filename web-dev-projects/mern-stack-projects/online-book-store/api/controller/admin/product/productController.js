const fs = require("fs")
const Product = require("../../../model/productModel")


exports.createProduct = async (req, res) => {
    try {
        const file = req.file;
        const filePath = file ? req.file.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s";
        
        const { productName, productDescription, productPrice, productStatus, productStockQty, brand, category, thumbnail } = req.body;

        if (!productName || !productDescription || !productPrice || !productStatus || !productStockQty || !brand || !category || !thumbnail) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        }

        const productCreated = await Product.create({
            productName,
            productDescription,
            productPrice,
            productStatus,
            productStockQty,
            productImage: process.env.BACKEND_URL + filePath,
            brand,
            category,
            thumbnail
        });

        res.status(200).json({
            message: "Product Created Successfully",
            data: productCreated
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};



exports.deleteProduct =  async(req,res)=>{
    const {id} = req.params
    if(!id){
        return res.status(400).json({
            message : "Please provide id"
        })
    }
    const oldData = await Product.findById(id)
    if(!oldData){
        return res.status(404).json({
            message : "No data found with that id"
        })
    }
 
    const oldProductImage = oldData.productImage // http://localhost:3000/1698943267271-bunImage.png"
    const lengthToCut  = process.env.BACKEND_URL.length
    const finalFilePathAfterCut = oldProductImage.slice(lengthToCut) 
         // REMOVE FILE FROM UPLOADS FOLDER
            fs.unlink("./uploads/" +  finalFilePathAfterCut,(err)=>{
                if(err){
                    console.log("error deleting file",err) 
                }else{
                    console.log("file deleted successfully")
                }
            })
    await Product.findByIdAndDelete(id)
    res.status(200).json({

        message : "Product delete successfully"
    })

}

exports.fetchAllProducts = async (req, res) => {
    // filter = {"category":["smartphone","laptops"]}
    // sort = {_sort:"price",_order="desc"}
    // pagination = {_page:1,_limit=10}
    // TODO : we have to try with multiple category and brands after change in front-end
    let query = Product.find({});
    let totalProductsQuery = Product.find({});
  
    if (req.query.category) {
      query = query.find({ category: req.query.category });
      totalProductsQuery = totalProductsQuery.find({
        category: req.query.category,
      });
    }
    if (req.query.brand) {
      query = query.find({ brand: req.query.brand });
      totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
    }
    //TODO : How to get sort on discounted Price not on Actual price
    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }
  
    const totalDocs = await totalProductsQuery.count().exec();
    console.log({ totalDocs });
  
    if (req.query._page && req.query._limit) {
      const pageSize = req.query._limit;
      const page = req.query._page;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }
  
    try {
      const docs = await query.exec();
      res.set('X-Total-Count', totalDocs);
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  

// exports.getProducts = async(req,res)=>{
//     const products = await Product.find()
//     if(products.length == 0 ){
//         res.status(400).json({
//             message : "No product Found",
//            data : []
//         })
//     }else{
//         res.status(200).json({
//             message : "Products Fetched Successfully",
//             data : products  
//         })
//     }
   
// }


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
                product ,
                productReviews
             }
        })
    }
 
}