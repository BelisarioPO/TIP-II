const db = require("../database/models")
const Productos = db.Productos; //Alias del modelo
const dataModule = require("../data/dataModule");


const mercadoController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express', productos: dataModule.productos});
    },
    searchResults: function(req,res) {
        return res.render('search-results')
    }
}

module.exports = mercadoController;