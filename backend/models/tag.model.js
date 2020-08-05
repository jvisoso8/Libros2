//Aguas, tienes que instalar los paquetes de aqui abajo.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Lo de adentro de username son validaciones.
//Es un esquema del documento de cada libro en la BD.
const ThisSchema = new Schema({
    name: {type: String, required: true}
},{
    timestamps: false,
});

const Tag = mongoose.model('Tag',ThisSchema);
module.exports = Tag;