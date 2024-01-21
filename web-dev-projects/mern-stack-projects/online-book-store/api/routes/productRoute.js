
const router = require("express").Router()
const {multer,storage  } = require("../middleware/multerConfig")
const { createProduct, getProducts } = require("../controller/admin/product/productController")

const upload = multer({storage : storage})


router.route("/")
.post(upload.single('productImage'), createProduct)
.get( getProducts)





module.exports = router 