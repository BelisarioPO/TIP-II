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

        console.log(db.Productos);

        let rel = [{}]

        db.Productos.findByPk(id)
            .then(function (result) {
                 return res.render("product", {
                    producto: result
                }) 
                
            }).catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = productController;