const { createProduct, getProduct, getProducts, deleteProduct, editProduct } = require("../controller/auth/admin/product/productController")
const { isAuthenticated } = require("../middleware/isAuthenticated")
const restrictTo = require("../middleware/restrictTo")
const {multer,storage  } = require("../middleware/multerConfig")
const catchAsync = require("../services/catchAsync")
const upload = multer({storage : storage})
const router = require("express").Router()

router.route("/products").post(isAuthenticated,restrictTo("admin"),upload.single('productImage'),catchAsync(createProduct)).get(catchAsync(getProducts))
router.route("/products/:id").get(catchAsync(getProduct)).delete(isAuthenticated,restrictTo("admin"),catchAsync(deleteProduct)).patch(isAuthenticated,restrictTo("admin"),upload.single('productImage'),catchAsync(editProduct))
module.exports = router 