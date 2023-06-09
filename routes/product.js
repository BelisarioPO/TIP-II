var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/detail/:id', productController.findProduct)

router.get('/add', productController.addProduct)
router.post("/add",productController.storeProduct)

router.get("/update:id",productController.showupdateProduct)

router.post("/update/:id",productController.updateProduct)

module.exports = router;