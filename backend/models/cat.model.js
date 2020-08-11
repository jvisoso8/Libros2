//Aguas, tienes que instalar los paquetes de aqui abajo.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Lo de adentro de username son validaciones.
//Es un esquema del documento de cada libro en la BD.
const ThisSchema = new Schema({
    name: {type: String, required: true},
    parent: {type: mongoose.Schema.Types.ObjectId, required: true},
    children: [{type: mongoose.Schema.Types.ObjectId}]
},{
    timestamps: false,
});

const Cat = mongoose.model('Categ',ThisSchema);
module.exports = Cat;

