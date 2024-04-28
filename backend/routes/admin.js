const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const adminCtrl = require('../controller/admin');
const restaurantctrl = require('../controller/restaurants')

router.post('/',  adminCtrl.ajouteradmin);

router.put('/:id',  adminCtrl.modifier);

router.get('/',  adminCtrl.recupall);

router.delete('/:id',  adminCtrl.supprimer);

router.get('/:id',  adminCtrl.recupone);

router.post('/', restaurantctrl.ajouterrestaurants);

module.exports  = router;
