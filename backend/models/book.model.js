//Aguas, tienes que instalar los paquetes de aqui abajo.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Lo de adentro de username son validaciones.
//Es un esquema del documento de cada libro en la BD.
const Schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    isbn: {type: String, required: true, unique: true},
    datePub: {type: Date, required: true},
    sinopsis: {type: Number, required: true},
    categories: [{type: String}],
    tags: [{type: String}],
},{
    timestamps: false,
});

const Book = mongoose.model('Book',Schema);
module.exports = Book;