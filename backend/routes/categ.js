const router = require('express').Router();
let Cat = require('../models/cat.model');


router.route('/').get((req,res) => {
    //Find es de mongoose
    Cat.find()
        .then(users => res.json(users)) //REgresa todo cat de DB
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const parent = req.body.parent;
    const newCat = new Cat({
        name,
        parent,
        children:  []
    });
    newCat.save()
        //.then(respu => res.json(respu.id))
        .then(function(respu){
            Cat.update(
                {_id: req.body.parent},
                {$push: {children: respu.id}}
            )
            .then(() => res.json("Cat Added"))
            .catch(err => res.status(400).json("Error: " + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
});

router.route('/kids').post((req,res) => {
    Cat.findOne({_id: req.body.id}, function(err,kids){
        Cat.find({
            '_id': {$in: kids.children}
        })
        .then(subs => res.json(subs))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;