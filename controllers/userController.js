const db = require("../database/models")
const Usuarios = db.Usuarios; //Alias del modelo
const dataModule = require('../data/dataModule');
const Comentarios = require("../database/models/Comentarios");

const userController = {
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
    },
    findAllUsers: function(req,res) {

        Usuarios.findAll()
        .then(function (result) {
            return res.send(result)
        }).catch(function (error) {
            console.log(error);
        });
        
    },
}
module.exports = userController;