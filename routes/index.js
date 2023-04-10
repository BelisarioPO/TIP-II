var express = require('express');
const mercadoController = require('../controllers/mercadoController');
var router = express.Router();

/* GET home page. */
router.get('/', mercadoController.index);

router.get('/search-results', mercadoController.searchResults)

module.exports = router;
