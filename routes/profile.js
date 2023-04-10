var express = require('express');
const profileController = require('../controllers/profileController');
var router = express.Router();

router.get("/login",profileController.login);

router.get('/register', profileController.register)

router.get('/', profileController.profile)

router.get('/edit', profileController.editProfile)

module.exports = router;