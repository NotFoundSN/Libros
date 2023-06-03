module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(255),
        },
    };
    let config = {
        tableName : 'categoria',
        timestamps : false,
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Libro, {
            foreignKey : "CategoriaId",
        });
    }

    return Categoria
};