const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const evenementCtrl = require('../controller/evenement');

router.post('/',  evenementCtrl.ajouterevenement);

router.put('/:id',  evenementCtrl.modifier);

router.get('/',  evenementCtrl.recupall);

router.delete('/:id',  evenementCtrl.supprimer);

router.get('/:id',  evenementCtrl.recupone);

module.exports  = router;
