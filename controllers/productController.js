const db = require("../database/models")
const Productos = db.Productos; //Alias del modelo

const productController = {

   

    showProduct: function(req, res) {
    
    let id = req.params.id;
    let encontrado = null;    
    for (let i = 0; i < dataModule.productos.length; i++) {
        if(id == dataModule.productos[i].id){
            encontrado = dataModule.productos[i];    
        }
    }

    return res.render('product', {product: encontrado, comment: dataModule.comentarios})
    
    },
    addProduct: function(req,res) {
        return res.render('product-add.ejs')
    },
    findAllProducts: function(req,res) {

        Productos.findAll()
        .then(function (result) {
            return res.render('index', {productos: result})
        }).catch(function (error) {
            console.log(error);
        });
        
    },
}

module.exports = productController;