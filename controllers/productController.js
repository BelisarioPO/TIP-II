const dataModule = require('../data/dataModule')

const productController = {

   

    showProduct: function(req, res) {
    let id = req.params.id;
    let encontrado = null;    
    for (let i = 0; i < dataModule.productos.length; i++) {
        if(id == dataModule.productos[i].id){
            encontrado = dataModule.productos[i];    
        }
    }

    return res.render('product', {product: encontrado})
    
    },
    addProduct: function(req,res) {
        return res.render('product-add.ejs')
    },
}

module.exports = productController;