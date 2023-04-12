const dataModule = require('../data/dataModule')

const profileController = {
    login: function(req,res){
        res.render("login",{title:"hola"});
    },
    register: function(req, res) {
        return res.render('register')
      },
    profile: function(req,res) {
        return res.render('profile',{profile: dataModule.usuario, productos: dataModule.productos})
    },
    editProfile: function(req,res) {
        return res.render('profile-edit')
    }
}

module.exports = profileController;