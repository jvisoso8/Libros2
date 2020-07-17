const router = require('express').Router();
let User = require('../models/book.model');
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

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User added!!')) //SIN PUNTOYCOMA, si lo pones vale V
        .catch(err => res.status(400).json('Error: ' + err));
});

//esto se hace para todos los routerfiles.
*/
//------------------------------------------------------
module.exports = router;