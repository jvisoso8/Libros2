const express = require('express');
const cors = require('cors');
//Aqui nos conectamos a la BD de Mongo
const mongoose = require('mongoose');



require('dotenv').config();

//Creates express server
const app = express();
//Vamos a correr el servidor local en el puerto 5000
const port = process.env.PORT || 5000;

//Cors middleware, allows to parse JSON
app.use(cors());
app.use(express.json());
//Agregamos lo de abajo para conectarnos a Mongo
const uri = process.env.ATLAS_URI; //Aguas ATLAS_URI está definida en .env, es variable de environment.
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Connection Successful")
});
//le decimos al server que files usar
//ahora, cada vex que alguien vaya a nuestro root url y
//ponga exercises al final va a lodear todo lo que esta en el 
//exercises router, lo mismo para users.
//----------------------------------------------------------
//Abajo cambias los files que bas a poner en models y routes
//----------------------------------------------------------
//const excercisesRouter = require('./routes/exercises');
//const usersRouter = require('./routes/users');

//app.use('/exercises',excercisesRouter);
//app.use('/users',usersRouter);
//-----------------------------------------------------------
//Starts the server, listens on a port
//Aguas con las comillas raras de abajo
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});