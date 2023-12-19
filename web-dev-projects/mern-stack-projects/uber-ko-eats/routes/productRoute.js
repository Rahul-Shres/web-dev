const { createProduct } = require("../controller/auth/admin/product/productController")

const router = require("express").Router()

router.route("/product").post(createProduct)



module.exports = router 