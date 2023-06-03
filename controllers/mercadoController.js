const db = require("../database/models")
const Productos = db.Productos; //Alias del modelo


const mercadoController = {
    index: function (req, res) {

        Productos.findAll()
            .then(function (result) {
                return res.render('index', {
                    productos: result
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    searchResults: function (req, res) {
        return res.render('search-results')
    }
}

module.exports = mercadoController;