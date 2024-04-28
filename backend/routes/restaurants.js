const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const restaurantsCtrl = require('../controller/restaurants');

router.post('/', restaurantsCtrl.ajouterrestaurants);

router.put('/:id',  restaurantsCtrl.modifier);

router.get('/',  restaurantsCtrl.recupall);

router.delete('/:id',  restaurantsCtrl.supprimer);

router.get('/:id',  restaurantsCtrl.recupone);

module.exports  = router;
