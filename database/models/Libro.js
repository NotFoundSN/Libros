module.exports = (sequelize, dataTypes) => {
	let alias = "Libro";
	let cols = {
		id: {
			type: dataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
		},
		titulo: {
			type: dataTypes.STRING(255),
		},
		descripcion: {
			type: dataTypes.TEXT,
		},
		imagen: {
			type: dataTypes.STRING(255),
		},
		AutorId: {
			type: dataTypes.INTEGER(11),
		},
		CategoriaId: {
			type: dataTypes.INTEGER(11),
		},
	};
	let config = {
		tableName: "libro",
		timestamps: false,
	};

	const Libro = sequelize.define(alias, cols, config);

	Libro.associate = function (models) {
		Libro.belongsTo(models.Autor);
		Libro.belongsTo(models.Categoria, { foreignKey: "CategoriaId" });
	};

	return Libro;
};
