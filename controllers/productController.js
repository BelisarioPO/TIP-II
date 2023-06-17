const db = require("../database/models")
const Productos = db.Productos; //Alias del modelo
const productController = {

    addProduct: function (req, res) {
        if (req.session.user != undefined) {
            /*Si esta logueado*/
            return res.render('product-add')
        } else {
            return res.redirect("/users/login")
        }
    },
    findProduct: function (req, res) {
        let id = req.params.id;
let rel = {
            include: [{ association: "usuario" }, { association: "comentarios",
        include: [{ association: "usuarios"}] }],
          }; 
        
        db.Productos.findByPk(id,rel)
            .then(function (result) {
                 return res.render("product", {
                    producto: result
                }) 
                
            }).catch(function (error) {
                console.log(error);
            });
    },
    storeProduct: function (req, res) {
        let errors = {}
        if (req.body.nombre == "") {
            errors.message = "Completa el nombre"
            res.locals.errors = errors
            return res.render("product-add")
        }
        else if (req.body.descripcion == "") {
            errors.message = "Completa la descripcion"
            res.locals.errors = errors
            return res.render("product-add")
        
        }
        else if (req.body.imagen == "") {
            errors.message = "Carga la imagen"
            res.locals.errors = errors
            return res.render("product-add")
        
        }
        else {
            let info = req.body;
            let productSave = {
                usuario_id: req.session.user.id, 
                nombre: info.nombre,
                descripcion: info.descripcion,
                img_productos: info.imagen
            }
            Productos.create(productSave)
                .then(function (result) {
                    return res.redirect('/users/profile')
                })
                .catch(function (error) {
                    console.log(error);
                });
        }



    },
    showupdateProduct: function (req, res){
        let id = req.params.id;
    Productos
      .findByPk(id)
      .then((result) => {
        console.log(result);
        return res.render("product-update", { producto: result });
      })
      .catch((err) => {
        console.log(err);
      });
    },
    updateProduct: function (req, res){
    let errors = {}
    let id = req.params.id;
    let info = req.body;
    Productos.update(info, {
        where: [{ id: id }],
      })
      .then((result) => {
        return res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
       
    },
    deleteProduct: function (req, res){
    let idEliminar = req.body.id;
    Productos.destroy({where: [{ id: idEliminar }],})
        .then((result) => {return res.redirect("/");})
        .catch((err) => {console.log(err);});},
    };

module.exports = productController;