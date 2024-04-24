const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const cuisineCtrl = require('../controller/cuisine');

router.post('/',  cuisineCtrl.ajoutercuisine);

router.put('/:id',  cuisineCtrl.modifier);

router.get('/',  cuisineCtrl.recupall);

router.delete('/:id',  cuisineCtrl.supprimer);

router.get('/:id',  cuisineCtrl.recupone);

module.exports  = router;
