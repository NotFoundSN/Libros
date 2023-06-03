const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
	books: async (req, res) => {
		try {
			let bookList = await db.Libro.findAll({
				include: [{ model: db.Categoria }, { model: db.Autor }],
			});
			let returnList = bookList.map((book) => {
				return {
					id: book.id,
					titulo: book.titulo,
					autor: book.Autor.nombre,
					categoria: book.Categorium.nombre,
				};
			});
			res.json(returnList);
		} catch (error) {
			console.log(error);
		}
	},
	searchBook: async (req, res) => {
		try {
			let bookList = await db.Libro.findAll({
				include: [{ model: db.Categoria }, { model: db.Autor }],
				where: { titulo: { [Op.like]: `%${req.body.title}%` } },
			});
			let returnList = bookList.map((book) => {
				return {
					id: book.id,
					titulo: book.titulo,
					autor: book.Autor.nombre,
					categoria: book.Categorium.nombre,
				};
			});
			res.json(returnList);
		} catch (error) {
			console.log(error);
		}
	},
	bookDetail: async (req, res) => {
		try {
			let book = await db.Libro.findOne({
				include: [{ model: db.Categoria }, { model: db.Autor }],
				where: { id: req.params.id },
			});
			let returnBook = {
				id: book.id,
				titulo: book.titulo,
				descripcion: book.descripcion,
				categoria: book.Categorium.nombre,
				autor: book.Autor.nombre,
				nacimiento: book.Autor.fec_nac,
				nacionalidad: book.Autor.nacionalidad,
				biografia: book.Autor.bio,
			};
			res.json(returnBook);
		} catch (error) {
			console.log(error);
		}
	},
	booksCategory: async (req, res) => {
		try {
			let categoryList = await db.Categoria.findAll({
				include: [{ model: db.Libro }],
			});
			let returnList = categoryList.map((category) => {
				return {
					id: category.id,
					nombre: category.nombre,
					cantidad: category.Libros.length,
				};
			});
			res.json(returnList);
		} catch (error) {
			console.log(error);
		}
	},
	createBook: async (req, res) => {
		try {
			/*let newBook = {
				titulo,
				descripcion,
				AutorId ,
				CategoriaId,
			}*/
		} catch (error) {
			console.log(error);
		}
	},
	categories: async (req, res) => {
		try {
			let categoryList = await db.Categoria.findAll();
			res.json(categoryList);
		} catch (error) {
			console.log(error);
		}
	},
	authors: async (req, res) => {
		try {
			let authorList = await db.Autor.findAll();
			let returnList = authorList.map((author) => {
				return {
					id: author.id,
					nombre: author.nombre,
				};
			});
			res.json(returnList);
		} catch (error) {
			console.log(error);
		}
	},
};
