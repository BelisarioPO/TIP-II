const db = require("../database/models")
const Usuarios = db.Usuarios; //Alias del modelo
const dataModule = require('../data/dataModule');
const bcrypt = require('bcryptjs')
const Comentarios = require("../database/models/Comentarios");

const userController = {

    login: function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect("/")
        } else {
            return res.render("login")
        }
    },

    loginRedirect: function (req, res) {
        let username = req.body.usuario
        let password = req.body.contrasena
        let filter = {
            where: [{ username: username }]
        };
        Usuarios.findOne(filter)
            .then(function (result) {
                if (result != undefined) {
                    let claveBien = bcrypt.compareSync(password, result.contrasena)
                    if (claveBien) {
                        req.session.user = result.dataValues;
                        res.locals.user = result.dataValues;
                        console.log(result)
                        /*poner un usuario en sesion*/
                        /*Click en recordarme*/
                        if (req.body.recordarme != undefined) {
                            res.cookie("idUsuario", result.id, { maxAge: 1000 * 60 * 15 })
                            return res.redirect("/product")
                        }
                        return res.redirect('/')
                    } else {
                        return res.send('/users/login')
                    }
                } else {
                    res.locals.errors.message = "Usuario inexistente o incorrecto"
                    return res.redirect("/users/login")
                }

            })
            .catch(function (error) {
                console.log(error);
            })
    },

    register: function (req, res) {
        return res.render('register')
    },

    store: function (req, res) {
        let errors = {}
        if (req.body.email == "") {
            errors.message = "Completa el mail pa"
            res.locals.errors = errors
            return res.render("register")
        }
        else if (req.body.contrasena == "") {
            errors.message = "Completa la contra"
            res.locals.errors = errors
            return res.render("register")
        }
        else {
            let info = req.body;
            let userSave = {
                email: info.email,
                username: info.username,
                contrasena: bcrypt.hashSync(info.password, 10),
                foto_perfil: info.foto,
                fecha_nacimiento: info.birthdate,
                dni: 12345768
            }
            Usuarios.create(userSave)
                .then(function (result) {
                    return res.redirect('/users/login')
                })
                .catch(function (error) {
                    console.log(error);
                });
        }



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