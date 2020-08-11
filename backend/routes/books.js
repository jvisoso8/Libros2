const router = require('express').Router();
let Book = require('../models/book.model');
//Primera ruta que usamos, handle http incoming requests.


//Aqui abajo las rutas que le van a hacer trigger al http request
//que definamos y va a regresar la info desde la BD.
//Lo comentamnos todo pero se queda como ejempo.
//Es un routerfile

//-------------------------------------------
/*
router.route('/').get((req, res) =>{
    //Find es de mongoose
    User.find()
        .then(users => res.json(users)) //nos regresa los usuarios de la db
        .catch(err => res.status(400).json('Error: ' + err));
});
*/
//------------------------------------------------------
//POST
//Guarda libro en la DB
router.route('/add').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const image = req.body.image;
    const isbn = req.body.isbn;
    const datePub = Date(req.body.date);
    const sinopsis = req.body.sinopsis;
    const categories = req.body.categories;
    const tags = req.body.tags;
    const series = req.body.series;

    const newBook = new Book({
        title,
        author,
        image,
        isbn,
        datePub,
        sinopsis,
        categories,
        tags,
        series
    });
    newBook.save()
        .then(() => res.json('Book added!!')) //SIN PUNTOYCOMA, si lo pones vale V
        .catch(err => res.status(400).json('Error: ' + err));
});
//POST
//Regresa coincidencias de libros con tales tags y cats
router.route('/get').post((req, res) => {
    Book.find({$and: [{"categories": {"$in" : req.body.categories}}, {"tags": {"$in" : req.body.tags}}]})
        .then(exercises => res.json(exercises)) 
        .catch(err => res.status(400).json('Error: ' + err));
});
//GET
//Regresa libro especifico por id de Mongo
router.route('/getId/:id').get((req, res) => {
    Book.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getName').post((req, res) => {
    Book.find({"title": {"$regex" : req.body.title , "$options": "i"}})
    .then(exercises => res.json(exercises)) 
    .catch(err => res.status(400).json('Error: ' + err));
});

//esto se hace para todos los routerfiles.

module.exports = router;