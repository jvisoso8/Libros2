const router = require('express').Router();
let Tag = require('../models/tag.model');


router.route('/add').post((req,res) => {
    const name = req.body.name.toLowerCase();

    const newTag = new Tag({
        name
    });
    Tag.find({name: req.body.name.toLowerCase()}, function(error, result){
        if(error){console.log(error)};
        if(!result.length){
            newTag.save()
                .then(() => res.json('Tag added!!')) 
                .catch(err => res.status(400).json('Error: ' + err));
        }
        else{
            res.json('Error, tag already exists'); 
        }
    });
})

router.route('/').get((req,res) => {
        //Find es de mongoose
        Tag.find()
            .then(users => res.json(users)) //nos regresa TODOS los Tags de la db
            .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;