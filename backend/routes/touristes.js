const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const touristesCtrl = require('../controller/touristes');

router.post('/',  touristesCtrl.ajoutertouristes);

router.put('/:id',  touristesCtrl.modifier);

router.get('/',  touristesCtrl.recupall);

router.delete('/:id',  touristesCtrl.supprimer);

router.get('/:id',  touristesCtrl.recupone);

module.exports  = router;
