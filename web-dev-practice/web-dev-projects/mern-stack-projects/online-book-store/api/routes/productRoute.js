
const router = require("express").Router()
const {multer,storage  } = require("../middleware/multerConfig")
const { createProduct, fetchAllProducts } = require("../controller/admin/product/productController")

const upload = multer({storage : storage})


router.route("/")
.post(upload.single('productImage'), createProduct)
.get( fetchAllProducts)





module.exports = router 