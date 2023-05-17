module.exports = function (sequelize, dataTypes) {
    let alias = "Productos"; 
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario:{
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING(200),
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        img_productos:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        }
    };
let config = {
    tableName: 'productos',
    timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
    underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
};
const Productos = sequelize.define(alias, cols, config);

/*crear relacion*/

/* Productos.associate = function (models) {
    Productos.belongsTo(models.Usuarios,{
        as: "Usuarios",
        foreingKey: "id_usuario"
    })
}; */

return Productos;
};

