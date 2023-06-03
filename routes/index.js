const express = require('express');
const router = express.Router();

//controladores
const controller = require('../controllers/indexController');

//middleware
//const registerMiddleware = require('../middleware/registerMiddleware');
//const tokenMiddleware = require('../middleware/tokenMiddleware');

//rutas
router.get('/libros', controller.books);
router.get('/buscarLibros', controller.searchBook);
router.get('/libro/:id', controller.bookDetail);
router.get("/librosCategoria", controller.booksCategory);
router.get("/categorias", controller.categories);
router.get("/autores", controller.authors);
//router.post('/view',tokenMiddleware, controller.view);

module.exports = router;
