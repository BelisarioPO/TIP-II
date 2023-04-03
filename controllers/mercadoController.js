

const mercadoController = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
    login: function(req,res){
        res.render("login",{title:"hola"});
    },
    register: function(req, res) {
        return res.render('register')
      },
    product: function(req, res) {
        return res.render('product')
    },
    profile: function(req,res) {
        return res.render('profile')
    }
}

module.exports = mercadoController;