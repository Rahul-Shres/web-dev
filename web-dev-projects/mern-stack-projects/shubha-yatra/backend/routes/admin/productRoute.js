const { createProduct, deleteProduct, editProduct,  updateProductStatus, updateProductStockAndPrice, getOrdersOfAProduct} = require("../../controller/admin/product/productController")
const { isAuthenticated } = require("../../middleware/isAuthenticated")
const {multer,storage  } = require("../../middleware/multerConfig")
const catchAsync = require("../../services/catchAsync")
const { getProducts, getProduct } = require("../../controller/global/globalController")
const restrictTo = require("../../middleware/restrictTo")
const upload = multer({storage : storage})
const router = require("express").Router()

router.route("/")
.post(isAuthenticated,restrictTo("admin"),upload.single('productImage'), catchAsync( createProduct))
.get( catchAsync(getProducts))

router.route("/productOrders/:id").get(isAuthenticated,restrictTo("admin"),catchAsync(getOrdersOfAProduct))
router.route("/status/:id")
.patch(isAuthenticated,restrictTo("admin"),updateProductStatus) 

router.route("/stockprice/:id")
.patch(isAuthenticated,restrictTo("admin"),updateProductStockAndPrice) 

router.route("/:id")
.get( catchAsync(getProduct))
.delete( isAuthenticated,restrictTo("admin"), catchAsync(deleteProduct))
.patch(isAuthenticated,restrictTo("admin"),upload.single('productImage'), editProduct) 

router.route("/:id").get(catchAsync(getProduct)).delete(isAuthenticated,restrictTo("admin"),catchAsync(deleteProduct)).patch(isAuthenticated,restrictTo("admin"),upload.single('productImage'),catchAsync(editProduct))
module.exports = router 