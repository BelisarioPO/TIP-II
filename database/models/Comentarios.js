module.exports = function (sequelize, dataTypes) {
    let alias = "Comentarios";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        post_id: {
            type: dataTypes.INTEGER,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        texto_comentario: {
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

      Comentarios.associate = function (models) {
          Comentarios.belongsTo(models.Productos, {
              as: "productos",
              foreignKey: "post_id",
          })
          Comentarios.belongsTo(models.Usuarios, {
              as: "usuarios",
              foreignKey: "usuario_id"
          })
      }; 




    return Comentarios;
};