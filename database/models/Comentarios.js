module.exports = function (sequelize, dataTypes) {
    let alias = "Comentarios"; 
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_post:{
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        textocomentario:{
            type: dataTypes.STRING,
        },
      
    };
let config = {
    tableName: 'comentarios',
    timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
};
const Comentarios = sequelize.define(alias, cols, config);

/*crear relacion*/

/* Comentarios.associate = function(models){
    Comentarios.hasMany(models.Productos,{
        as: "Productos",
        foreingKey: "id_usuario",
        otherKey:
    })
}; */




return Comentarios;
};