var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
/* GET users listing. */


router.get("/login",userController.login);

router.post('/login', userController.loginRedirect)

router.get('/register', userController.register)
router.post('/register', userController.store)

router.get('/profile/:id', userController.profile)


router.get("/edit/:id",userController.showeditProfile)
router.post('/edit/:id', userController.editProfile)


router.get('/findAllUsers', userController.findAllUsers)

router.post('/logout', userController.logout)


/*router.get('/findAllComents', userController.findAll)*/

module.exports = router;
