module.exports = function (sequelize, dataTypes) {
    let alias = "Usuarios";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING(200),
        },
        contrasena: {
            type: dataTypes.STRING(200),
        },
        foto_perfil: {
            type: dataTypes.STRING(200),
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };
    const Usuarios = sequelize.define(alias, cols, config);

    /*crear relacion*/
    /*  Usuarios.associate = function (models) {
          Usuarios.hasMany(models.Productos, {
              as: "productos",
              foreingKey: "id_usuario"
          })
          Usuarios.hasMany(models.Comentarios, {
              as: "usuarios",
              foreignKey: "id_usuario"
          })
      }; */

    return Usuarios;
}