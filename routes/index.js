var express = require('express');
const mercadoController = require('../controllers/mercadoController');
var router = express.Router();

/* GET home page. */
router.get('/', mercadoController.index);

router.get("/login",mercadoController.login);

router.get('/register', mercadoController.register)

router.get('/product', mercadoController.product)

router.get('/profile', mercadoController.profile)

module.exports = router;
