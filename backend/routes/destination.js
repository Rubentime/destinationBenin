const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const destinationCtrl = require('../controller/destination');

router.post('/',  destinationCtrl.ajouterdestination);

router.put('/:id',  destinationCtrl.modifier);

router.get('/',  destinationCtrl.recupall);

router.delete('/:id',  destinationCtrl.supprimer);

router.get('/:id',  destinationCtrl.recupone);

module.exports  = router;
