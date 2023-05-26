const db = require("../database/models")
const Usuarios = db.Usuarios; //Alias del modelo
const dataModule = require('../data/dataModule');
const bcrypt = require('bcryptjs')
const Comentarios = require("../database/models/Comentarios");

const userController = {

    login: function (req, res) {
        res.render("login", {
            title: "hola"
        });
    },

    loginRedirect: function(req,res) {
        let emailEncontrado = req.body.usuario
        let password = req.body.contraseña
        let filter = {
            where: [{email: emailEncontrado}]
        };
        Usuarios.findOne(filter)
        .then(function(result){
            if (result != null) {
                let claveBien = bcrypt.compareSync(password, result.contraseña)
                if (claveBien){
                    /*poner un usuario en sesion*/
                    req.session.user = result;
                    /*Click en recordarme*/
                    if (req.body.recordarme =! undefined) {
                        res.cookie("idUsuario",result.id,{maxAge: 1000 * 60 * 15})
                    }
                    
                    return res.redirect('/')
                } else {
                    return res.send('bien mail mal contra') 
                }
            } else {
                return res.send('No existe')
            }
            
        })
        .catch(function(error) {
            console.log(error);
        })
    },

    register: function (req, res) {
        return res.render('register')
    },

    store: function(req, res){
        let info = req.body;
        console.log(info);
        let userSave = {
            email: info.email,
            userName: info.username,
            password: bcrypt.hashSync(info.password, 10),
        }

    Usuarios.create(userSave)
    .then(function(result){
        return res.redirect('/users/login')
    })
    .catch(function(error) {
        console.log(error);
    });

    },

    profile: function (req, res) {
        return res.render('profile', {
            profile: dataModule.usuario,
            productos: dataModule.productos
        })
    },
    editProfile: function (req, res) {
        return res.render('profile-edit')
    },

    findAllUsers: function (req, res) {

        Usuarios.findAll()
            .then(function (result) {
                return res.send(result)
            }).catch(function (error) {
                console.log(error);
            });

    },

}
module.exports = userController;