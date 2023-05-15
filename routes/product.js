var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.findAllProducts)

router.get('/detail/:id', productController.showProduct)

router.get('/add',productController.addProduct)



module.exports = router;