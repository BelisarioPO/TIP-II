const db = require("../database/models")
const Productos = db.Productos; //Alias del modelo

const productController = {

    addProduct: function (req, res) {
        return res.render('product-add.ejs')
    },
    findAllProducts: function (req, res) {

        Productos.findAll()
            .then(function (result) {
                return res.render('index', {productos : result})
                })
            .catch(function (error) {
                console.log(error);
            });

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