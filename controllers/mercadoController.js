const db = require("../database/models")
const Productos = db.Productos; //Alias del modelo
const op = db.Sequelize.Op

const mercadoController = {
    index: function (req, res) {

        Productos.findAll({order : [["created_at","DESC"]]})
        
            .then(function (result) {
                return res.render('index', {
                    productos: result
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    searchResults: (req, res) =>{
        let busqueda = req.query.search;

        Productos.findAll(
            {
            where:[
                // La coincidencia debe ser en titulo o descripcion
            {nombre: {[op.like]: '%' + busqueda + '%'}}],
            // Orden de search results, el primero siendo el mas reciente
             order: [
                ["created_at","DESC"]
             ]
            }
        ).then(function(result) {
            return res.render('search-results', {productos : result})
          })
          .catch(function (error) {
            console.log(error);
          });
    },
}

module.exports = mercadoController;