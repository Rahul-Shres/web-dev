const { createProduct } = require("../controller/auth/admin/product/productController")
const { isAuthenticated } = require("../middleware/isAuthenticated")
const restrictTo = require("../middleware/restrictTo")
const {multer,storage  } = require("../middleware/multerConfig")
const upload = multer({storage : storage})
const router = require("express").Router()

router.route("/product").post(isAuthenticated,restrictTo("admin"),upload.single('productImage'),createProduct)



module.exports = router 