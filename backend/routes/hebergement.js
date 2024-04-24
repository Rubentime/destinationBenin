const express = require('express');
const router = express.Router();
const authmid = require('../middleware/auth');
const hebergementCtrl = require('../controller/hebergement');

router.post('/',  hebergementCtrl.ajouterhebergement);

router.put('/:id',  hebergementCtrl.modifier);

router.get('/',  hebergementCtrl.recupall);

router.delete('/:id',  hebergementCtrl.supprimer);

router.get('/:id',  hebergementCtrl.recupone);

module.exports  = router;
