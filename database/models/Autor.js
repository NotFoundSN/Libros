module.exports = (sequelize, dataTypes) => {
	let alias = "Autor";
	let cols = {
		id: {
			type: dataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: dataTypes.STRING(255),
		},
		fec_nac: {
			type: dataTypes.DATE,
		},
		imagen: {
			type: dataTypes.STRING(255),
		},
		nacionalidad: {
			type: dataTypes.STRING(255),
		},
		bio: {
			type: dataTypes.TEXT,
		},
	};
	let config = {
		tableName: "autor",
		timestamps: false,
	};

	const Autor = sequelize.define(alias, cols, config);

	Autor.associate = function(models) {
        Autor.hasMany(models.Libro, {
            foreignKey : 'AutorId',
        });
    }

    return Autor;
};
